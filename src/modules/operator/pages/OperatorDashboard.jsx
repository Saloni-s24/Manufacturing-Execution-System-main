import KPICard from "../../../components/ui/KPICard";
import ActiveOrdersTable from "../components/ActiveOrdersTable";
import ShiftActivity from "../components/ShiftActivity";
import WorkCenterStatus from "../components/WorkCenterStatus";

import { kpiData } from "../data/dashboardData";
import { FiDownload } from "react-icons/fi";
import html2pdf from "html2pdf.js";
import { PERMISSIONS } from "../../../constants/permissions";
import { canAccess, getStoredUser } from "../../../utils/canAccess";
import { useNavigate } from "react-router-dom";

const OperatorDashboard = () => {
  const navigate = useNavigate();
  const user = getStoredUser();
  const canExportShiftReport = canAccess(
    user,
    PERMISSIONS.DASHBOARD_SHIFT_REPORT_EXPORT
  );

  const generatePDF = () => {
    const element = document.getElementById("shift-report");

    const options = {
      margin: 0.5,
      filename: "Shift_Report.pdf",
      image: {
        type: "jpeg",
        quality: 1,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  const getKpiRoute = (title) => {
    if (["Open Orders", "Completed", "In Progress"].includes(title)) {
      return "/production-orders";
    }

    if (["Downtime", "OEE Today"].includes(title)) {
      return "/oee";
    }

    if (title === "NC Reports") {
      return "/quality-page";
    }

    return null;
  };

  return (
    <div id="shift-report" className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Operator Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Plant 1000 · Line PL-02 · Shift A
          </p>
        </div>

        {/* Right */}
        {canExportShiftReport && (
          <div>
            <button
              onClick={generatePDF}
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
              <FiDownload size={18} />
              Shift Report
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiData.map((item, index) => {
          const route = getKpiRoute(item.title);

          return (
            <KPICard
              key={index}
              {...item}
              onClick={route ? () => navigate(route) : undefined}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ActiveOrdersTable />
        <ShiftActivity />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">      <WorkCenterStatus />
      </div>


    </div>
  );
};

export default OperatorDashboard;
