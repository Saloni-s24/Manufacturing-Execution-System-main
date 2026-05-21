const statusStyles = {
  Released: "bg-gray-200 text-gray-700",
  "In Process": "bg-blue-100 text-blue-700",
  "Near Done": "bg-green-100 text-green-700",
  Delayed: "bg-orange-100 text-orange-700",
  Confirmed: "bg-emerald-100 text-emerald-700",
  Closed: "bg-gray-700 text-white",
};

const OrderStatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default OrderStatusBadge;