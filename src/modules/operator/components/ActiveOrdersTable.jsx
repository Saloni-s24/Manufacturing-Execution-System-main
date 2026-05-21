import Table from "../../../components/ui/Table";
import { activeOrders } from "../data/dashboardData";
import { useNavigate } from "react-router-dom";

const ActiveOrdersTable = () => {
  const navigate = useNavigate();

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "running":
      case "in progress":
        return {
          badge: "bg-blue-100 text-blue-700",
          dot: "bg-blue-500",
          progress: "bg-blue-500",
        };

      case "delayed":
        return {
          badge: "bg-orange-100 text-orange-700",
          dot: "bg-orange-500",
          progress: "bg-orange-500",
        };

      case "near done":
      case "completed":
        return {
          badge: "bg-green-100 text-green-700",
          dot: "bg-green-600",
          progress: "bg-green-600",
        };

      default:
        return {
          badge: "bg-gray-100 text-gray-700",
          dot: "bg-gray-500",
          progress: "bg-gray-500",
        };
    }
  };

  const headers = ["Order #", "Material", "Qty", "Progress", "Status"];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      {/* 🔷 Header Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">
          Active Production Orders
        </h2>

        <div className="flex items-center gap-3">
          <div className="px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
            Line PL-02
          </div>
          <button
            onClick={() => navigate("/production-orders")}
            className="px-4 py-1.5 rounded-lg border border-gray-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            View All →
          </button>
        </div>
      </div>

      {/* 🔷 Table */}
      <div className="px-5 pt-4 pb-5">
        <Table headers={headers}>
          {activeOrders.map((order, index) => {
            const progress = (order.completed / order.qty) * 100;
            const styles = getStatusStyle(order.status);

            return (
              <tr key={order.id}>
                <td className="px-6 py-5 font-semibold text-gray-800">
                  {order.id}
                </td>

                <td className="px-6 py-5 text-gray-700 font-medium">
                  {order.material}
                </td>

                <td className="px-6 py-5 text-gray-700 font-semibold">
                  {order.qty}
                </td>

                <td className="px-6 py-5 min-w-[240px]">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${styles.progress}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <p className="text-sm text-gray-500 mt-1.5 font-medium">
                    {order.completed}/{order.qty}
                  </p>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`
                    inline-flex items-center gap-2
                    px-3 py-1.5 rounded-full
                    text-sm font-semibold
                    shadow-sm
                    ${styles.badge}
                  `}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${styles.dot}`}
                    />
                    {order.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default ActiveOrdersTable;
