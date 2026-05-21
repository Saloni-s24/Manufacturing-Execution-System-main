import { shiftActivities } from "../data/dashboardData";

const ShiftActivity = () => {
  const getActivityStyle = (type) => {
    switch (type?.toLowerCase()) {
      case "success":
        return {
          border: "border-green-500",
          dot: "bg-green-500",
        };

      case "warning":
        return {
          border: "border-orange-500",
          dot: "bg-orange-500",
        };

      default:
        return {
          border: "border-blue-500",
          dot: "bg-blue-500",
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <h2 className="text-2xl font-bold text-slate-800">
          Shift Activity Log
        </h2>

        <div className="px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
          Shift A · Today
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 py-5">
        <div className="relative border-l-2 border-gray-200 ml-2 space-y-8">
          {shiftActivities.map((activity, index) => {
            const styles = getActivityStyle(activity.type);

            return (
              <div key={index} className="relative pl-6">
                {/* Timeline Dot */}
                <div
                  className={`
                    absolute -left-[11px] top-1
                    w-5 h-5 rounded-full
                    border-4 border-white shadow
                    ${styles.dot}
                  `}
                />

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>

                  <p className="text-base text-gray-600 mt-1">
                    {activity.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShiftActivity;
