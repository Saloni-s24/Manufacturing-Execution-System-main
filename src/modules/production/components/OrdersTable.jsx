import { CheckCircle2 } from "lucide-react";
import Table from "../../../components/ui/Table";
import OrderStatusBadge from "./OrderStatusBadge";
import Toast from "../../../components/ui/Toast";

const OrdersTable = ({ orders, selectedOrder, setSelectedOrder }) => {
  const headers = [
    "Order No(AUFNR)",
    "OrderType (AUART)",
    "Plant (WERKS)",
    "Material No (MATNR)",
    "Material Desc",
    "Order Qty(GAMNG)",
    "UoM(GMEIN)",
    "Basic Start(GSTRP)",
    "Basic Finish(GLTRP)",
    "Actual Start(ISDD)",
    "Actual Finish(IEDD)",
    "System Status(JEST)",
    "User Status",
    "MES Display Status",
    "confirm",
  ];
  const handleConfirm = (e, OrderNO) => {
    e.stopPropagation(); // 🚨 prevents row click

    Toast.show(`Order ${OrderNo} confirmed`, "success");
  };
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      {/* 🔷 Header Bar (same as ActiveOrdersTable) */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">
          Production Orders
        </h2>

        <div className="px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
          All Orders
        </div>
      </div>

      {/* 🔷 Table Wrapper (same spacing) */}
      <div className="px-5 pt-4 pb-5">
        <Table headers={headers}>
          {orders.map((order) => (
            <tr
              key={order.OrderNo}
              onClick={() => setSelectedOrder(order)}
              className={`
                cursor-pointer transition-all duration-200
                ${
                  selectedOrder?.OrderNo === order.OrderNo
                    ? "selected-row !bg-indigo-50"
                    : ""
                }
              `}
            >
             
              

              <td className="px-6 py-5">{order.OrderNo}</td>

              <td className="px-6 py-5">{order.OrderType}</td>

              <td className="px-6 py-5">{order.Plant}</td>

              <td className="px-6 py-5">{order.MaterialNo}</td>

              <td className="px-6 py-5">{order.MaterialDesc}</td>

              <td className="px-6 py-5">{order.OrderQty}</td>

              <td className="px-6 py-5">{order.UoM}</td>

              <td className="px-6 py-5">{order.BasicStart}</td>

              <td className="px-6 py-5">{order.BasicFinish}</td>

              <td className="px-6 py-5">{order.ActualStart}</td>

              <td className="px-6 py-5">{order.ActualFinish}</td>

              <td className="px-6 py-5">{order.SystemStatus}</td>

              <td className="px-6 py-5">{order.UserStatus}</td>

              <td className="px-6 py-5">{order.MESDisplayStatus}</td>

              <td className="px-6 py-5">
                <button
                  onClick={(e) => handleConfirm(e,order.OrderNo)}
                  className="
    flex items-center gap-2
    px-4 py-2
    rounded-lg
    bg-blue-600
    text-white
    text-sm font-semibold
    shadow-sm
    hover:bg-blue-700
    transition-all duration-200
    active:scale-95
  "
                >
                  <CheckCircle2 size={16} />
                  Confirm
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default OrdersTable;
