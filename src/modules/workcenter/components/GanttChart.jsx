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
      return "bg-gray-400 text-white";

    default:
      return "bg-slate-500";
  }
};

export default function GanttChart({ data }) {
 
  const shiftStart = 6; // 06:00
  const shiftEnd = 14; // 14:00
  const shiftHours = shiftEnd - shiftStart;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-auto">

      {/* 🔷 Header */}
      <div className="flex min-w-[1200px] bg-sky-50 border-b">

        {/* Plant */}
        <div className="w-[100px] px-4 py-3 font-semibold text-gray-700 border-r">
          Plant
        </div>

        {/* Work Center */}
        <div className="w-[160px] px-4 py-3 font-semibold text-gray-700 border-r">
          Work Center
        </div>

        {/* Shift */}
        <div className="w-[160px] px-4 py-3 font-semibold text-gray-700 border-r">
          Shift
        </div>

        {/* Timeline */}
        <div className="flex flex-1">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="flex-1 text-center py-3 text-xs font-medium text-gray-600 border-r"
            >
              {String(shiftStart + i).padStart(2, "0")}:00
            </div>
          ))}
        </div>
      </div>

      {/* 🔷 Rows */}
      {data.map((row, index) => (
        <div
          key={index}
          className="flex min-w-[1200px] border-b last:border-b-0"
        >

          {/* Plant */}
          <div className="w-[100px] px-4 py-4 border-r font-medium bg-white">
            {row.plant}
          </div>

          {/* Work Center */}
          <div className="w-[160px] px-4 py-4 border-r font-semibold text-gray-800 bg-white">
            {row.wc}
          </div>

          {/* Shift Name */}
          <div className="w-[160px] px-4 py-4 border-r text-gray-700 bg-white">
            {row.shiftName}
          </div>

          {/* Timeline */}
          <div className="relative flex-1 h-[80px] bg-white">

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
                    absolute top-4 h-11
                    rounded-xl px-3
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
                  <div className="flex flex-col leading-tight text-white overflow-hidden">
                    <span className="truncate font-bold">
                      {o.id}
                    </span>

                    <span className="text-[10px] opacity-90">
                      Op: {o.operation}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}