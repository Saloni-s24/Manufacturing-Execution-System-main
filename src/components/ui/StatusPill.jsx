const StatusPill = ({
  status,
}) => {
  const statusStyles = {
    Running:
      "bg-green-100 text-green-600",

    Delayed:
      "bg-yellow-100 text-yellow-700",

    Down:
      "bg-red-100 text-red-600",

    Idle:
      "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusPill;