export default function OEEBreakdownBar() {
  const data = [
    {
      label: "Productive",
      value: 60,
      color: "bg-green-600",
    },
    {
      label: "Availability Loss",
      value: 15,
      color: "bg-orange-500",
    },
    {
      label: "Performance Loss",
      value: 15,
      color: "bg-blue-500",
    },
    {
      label: "Quality Loss",
      value: 10,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="space-y-4">

      {/* 🔷 Bar */}
      <div className="w-full h-10 flex rounded-lg overflow-hidden shadow-inner bg-gray-200">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.color} transition-all duration-500`}
            style={{ width: `${item.value}%` }}
          />
        ))}
      </div>

      {/* 🔷 Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            {/* Color Dot */}
            <span
              className={`w-3 h-3 rounded-full ${item.color}`}
            />

            {/* Label + Value */}
            <span className="text-gray-700 font-medium">
              {item.label}
            </span>

            <span className="text-gray-500">
              {item.value}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}