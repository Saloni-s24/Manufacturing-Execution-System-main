// GanttChart.jsx

const getColor = (status) => {
  switch (status) {
    case "Running":
      return "bg-blue-500";

    case "Delayed":
      return "bg-orange-500";

    case "Near Done":
      return "bg-green-600";

    case "Maintenance":
    case "Setup":
      return "bg-gray-300 text-gray-700";

    default:
      return "bg-gray-400";
  }
};

export default function GanttChart({ data }) {
  const shiftStart = 8;
  const shiftHours = 8;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
      {/* 🔷 Timeline Header */}
      <div className="flex min-w-[1000px] bg-gray-50 border-b">

        {/* Work Center */}
        <div className="w-[180px] px-5 py-3 font-semibold text-gray-700 border-r">
          Work Center
        </div>

        {/* Time */}
        <div className="flex flex-1">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="flex-1 text-center py-3 text-xs text-gray-500 border-r"
            >
              {shiftStart + i}:00
            </div>
          ))}
        </div>
      </div>

      {/* 🔷 Rows */}
      {data.map((row) => (
        <div
          key={row.wc}
          className="flex min-w-[1000px] border-b last:border-b-0"
        >

          {/* Work Center Name */}
          <div className="w-[180px] px-5 py-4 font-semibold text-gray-800 border-r bg-white">
            {row.wc}
          </div>

          {/* Timeline */}
          <div className="relative flex-1 h-[70px] bg-white">

            {/* Grid */}
            <div className="absolute inset-0 flex">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r border-gray-100"
                />
              ))}
            </div>

            {/* Orders */}
            {row.orders.map((o, i) => {
              const left =
                ((o.start - shiftStart) / shiftHours) * 100;

              const width =
                ((o.end - o.start) / shiftHours) * 100;

              return (
                <div
                  key={i}
                  className={`
                    absolute top-3 h-10
                    rounded-lg px-3
                    flex items-center
                    text-xs font-semibold
                    shadow-sm
                    hover:shadow-md
                    transition-all duration-200
                    ${getColor(o.status)}
                  `}
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                  }}
                >
                  <span className="text-white truncate">
                    {o.id}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}