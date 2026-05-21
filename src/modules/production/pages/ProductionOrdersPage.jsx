import { useMemo, useState } from "react";
import { RefreshCcw, Plus } from "lucide-react";

import PageContainer from "../../../components/ui/PageContainer";
import Toast from "../../../components/ui/Toast";

import OrderFilters from "../components/OrderFilters";
import OrdersTable from "../components/OrdersTable";
import OrderDetails from "../components/OrderDetails";
import OperationRouting from "../components/OperationRouting";

import { productionOrders } from "../data/ProductionOrders";

const ProductionOrdersPage = () => {
  const [filteredOrders, setFilteredOrders] = useState(productionOrders);

  const [selectedOrder, setSelectedOrder] = useState(
    productionOrders[0] || null,
  );

  // Dynamic Plant Dropdown
  const plants = useMemo(() => {
    return [...new Set(productionOrders.map((order) => order.plant))];
  }, []);

  const handleSearch = (filters) => {
    const result = productionOrders.filter((order) => {
      const matchOrder =
        !filters.productionOrder ||
        order.id.toLowerCase().includes(filters.productionOrder.toLowerCase());

      const matchMaterial =
        !filters.material ||
        order.material.toLowerCase().includes(filters.material.toLowerCase());

      const matchStatus = !filters.status || order.status === filters.status;

      const matchPlant = !filters.plant || order.plant === filters.plant;

      return matchOrder && matchMaterial && matchStatus && matchPlant;
    });

    setFilteredOrders(result);
    setSelectedOrder(result.length > 0 ? result[0] : null);
  };
  const handleSync = () => {
    Toast.show("Syncing with SAP...", "info");
  };

  const handleCreate = () => {
    Toast.show("Opening order creation...", "success");
  };
  return (
    <PageContainer>
      {/* 🔷 Header (STANDARDIZED) */}
      <div className="mb-6 flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Production Orders
          </h1>

          <p className="text-gray-500 mt-1">SAP PP · CO03 / CO02 / CO01</p>
        </div>

        {/* Right */}
        <div className="flex gap-3">
          <button
            onClick={handleSync}
            className="
      flex items-center gap-2
      px-5 py-2.5
      rounded-xl
      bg-white
      border border-gray-200
      text-blue-600
      font-semibold
      shadow-sm
      hover:bg-gray-50
      transition-all duration-200
    "
          >
            <RefreshCcw size={18} />
            Sync SAP
          </button>

          <button
            onClick={handleCreate}
            className="
      flex items-center gap-2
      px-5 py-2.5
      rounded-xl
      bg-blue-600
      text-white
      font-semibold
      shadow-sm
      hover:bg-blue-700
      transition-all duration-200
    "
          >
            <Plus size={18} />
            Create Order
          </button>
        </div>
      </div>

      {/* 🔷 Filters */}
      <OrderFilters onSearch={handleSearch} plants={plants} />

      {/* 🔷 Orders Table */}
      <div className="mb-6">
        <OrdersTable
          orders={filteredOrders}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      </div>

      {/* 🔷 Order Details */}
      <div className="mb-6">
        <OrderDetails selectedOrder={selectedOrder} />
      </div>

      {/* 🔷 Operations */}
      <OperationRouting operations={selectedOrder?.operations} />
    </PageContainer>
  );
};

export default ProductionOrdersPage;
