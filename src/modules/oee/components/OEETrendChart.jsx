export default function OEETrendChart({ data = [] }) {

  return (
    <div className="space-y-4">

      {data.map((d) => (
        <div key={d.day} className="space-y-1">

          {/* 🔷 Label Row */}
          <div className="flex justify-between text-xs text-gray-600">
            <span>Day {d.day}</span>
            <span className="font-semibold text-gray-800">
              {d.value}%
            </span>
          </div>

          {/* 🔷 Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="
                h-3 rounded-full
                bg-blue-500
                transition-all duration-500
              "
              style={{ width: `${d.value}%` }}
            />
          </div>

        </div>
      ))}

    </div>
  );
}