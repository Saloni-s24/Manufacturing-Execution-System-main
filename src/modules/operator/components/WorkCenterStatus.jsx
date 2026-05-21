import { machineStatus } from "../data/dashboardData";
import { useNavigate } from "react-router-dom";
const WorkCenterStatus = () => {
  const getMachineStyles = (status) => {
    switch (status.toLowerCase()) {
      case "running":
        return {
          dot: "bg-green-500",
          glow: "shadow-green-300",
          badge: "bg-green-100 text-green-700",
        };

      case "down":
        return {
          dot: "bg-red-500",
          glow: "shadow-red-300",
          badge: "bg-red-100 text-red-700",
        };

      case "setup":
        return {
          dot: "bg-yellow-400",
          glow: "shadow-yellow-300",
          badge: "bg-yellow-100 text-yellow-700",
        };

      case "idle":
        return {
          dot: "bg-purple-300",
          glow: "shadow-purple-200",
          badge: "bg-gray-100 text-gray-600",
        };

      default:
        return {
          dot: "bg-gray-400",
          glow: "shadow-gray-200",
          badge: "bg-gray-100 text-gray-600",
        };
    }
  };
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <h2 className="text-2xl font-bold text-slate-800">
          Work Center Status
        </h2>

        <button
          onClick={() => navigate("/work-centers")}
          className="px-4 py-1.5 rounded-lg border border-gray-200 text-blue-600 font-semibold hover:bg-blue-50 transition"
        >
          View All →
        </button>
      </div>

      {/* Cards */}
      <div className="p-5 flex flex-wrap justify-center gap-3">
        {machineStatus.map((machine, index) => {
          const styles = getMachineStyles(machine.status);

          return (
            <div
              key={index}
              className="
  border border-gray-200
  rounded-xl
  w-[190px]
  h-[170px]
  px-4 py-5
  text-center
  bg-white
  hover:shadow-md
  transition-all duration-300
"
            >
              {/* Status Dot */}
              <div
                className={`
                  w-6 h-6 rounded-full mx-auto mb-4
                  ${styles.dot}
                  shadow-lg ${styles.glow}
                `}
              />

              {/* Machine Name */}
              <h3 className="text-2xl font-bold text-slate-800">
                {machine.machine}
              </h3>

              {/* Status Badge */}
              <div className="mt-3">
                <span
                  className={`
                    px-3 py-1 rounded-full
                    text-sm font-semibold
                    ${styles.badge}
                  `}
                >
                  {machine.status}
                </span>
              </div>

              {/* Order / Extra Info */}
              <p className="text-gray-500 text-lg mt-3">{machine.order}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCenterStatus;
