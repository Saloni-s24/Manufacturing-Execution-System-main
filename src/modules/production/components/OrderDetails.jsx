// src/components/OrderDetails.jsx

import {
  Package,
  Factory,
  MapPin,
  Settings,
  Layers,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const OrderDetails = ({ selectedOrder }) => {
  if (!selectedOrder) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-10 text-center text-gray-500">
        Select an order to view details
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

      {/* 🔷 Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Order Details
          </h2>
          <p className="text-sm text-gray-500">
            Production order information
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
          {selectedOrder.id}
        </div>
      </div>

      {/* 🔷 Grid */}
      <div className="px-5 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          <InfoCard label="Order Type" value={selectedOrder.type} icon={Settings} color="indigo" />
          <InfoCard label="Material" value={selectedOrder.material} icon={Package} color="indigo" />
          <InfoCard label="Plant" value={selectedOrder.plant} icon={Factory} color="blue" />
          <InfoCard label="MRP Controller" value={selectedOrder.mrpController} icon={Layers} color="blue" />
          <InfoCard label="Storage Location" value={selectedOrder.storageLocation} icon={MapPin} color="blue" />
          <InfoCard label="Target Qty" value={selectedOrder.targetQty} icon={BarChart3} color="green" />
          <InfoCard label="Confirmed Qty" value={selectedOrder.confirmedQty} icon={CheckCircle2} color="green" />
          <InfoCard label="Scrap Qty" value={selectedOrder.scrapQty} icon={AlertTriangle} color="orange" />

        </div>
      </div>
    </div>
  );
};
const InfoCard = ({ label, value, icon: Icon, color }) => {
  const colorMap = {
    indigo: "bg-indigo-50 border-indigo-100 text-indigo-700 border-l-indigo-400",
    blue: "bg-blue-50 border-blue-100 text-blue-700 border-l-blue-400",
    green: "bg-emerald-50 border-emerald-100 text-emerald-700 border-l-emerald-400",
    orange: "bg-orange-50 border-orange-100 text-orange-700 border-l-orange-400",
    gray: "bg-gray-50 border-gray-200 text-gray-700 border-l-gray-300",
  };

  return (
    <div
      className={`
        flex items-center gap-3
        rounded-lg border border-l-4
        px-3 py-2
        transition-all duration-200
        hover:shadow-sm
        ${colorMap[color] || colorMap.gray}
      `}
    >
      <Icon size={18} className="shrink-0" />

      <div className="leading-tight">
        <p className="text-[11px] opacity-70 uppercase tracking-wide">
          {label}
        </p>

        <h4 className="font-semibold text-sm">
          {value ?? "-"}
        </h4>
      </div>
    </div>
  );
};

export default OrderDetails;