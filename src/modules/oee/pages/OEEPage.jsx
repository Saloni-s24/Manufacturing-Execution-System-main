import PageContainer from "../../../components/ui/PageContainer";
import { Download, FileSpreadsheet } from "lucide-react";

import KPISection from "../components/KPISection";
import OEEBreakdownBar from "../components/OEEBreakdownBar";
import DowntimeForm from "../components/DowntimeForm";
import DowntimeTable from "../components/DowntimeTable";
import OEETrendChart from "../components/OEETrendChart";

import { kpis, downtimeEvents, trendData } from "../data/oeeData";

import Toast from "../../../components/ui/Toast";
import { PERMISSIONS } from "../../../constants/permissions";
import { canAccess, getStoredUser } from "../../../utils/canAccess";

export default function OEEPage() {
  const user = getStoredUser();
  const canExportOee = canAccess(user, PERMISSIONS.OEE_EXPORT);
  const canWriteDowntime = canAccess(user, PERMISSIONS.OEE_DOWNTIME_WRITE);

  const handlePDF = () => {
    Toast.show("Export PDF...");
  };

  const handleExcel = () => {
    Toast.show("Export Excel...");
  };

  return (
    <PageContainer>
      {/* 🔷 Header */}
      <div className="mb-6 flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            OEE & Downtime Tracking
          </h1>

          <p className="text-gray-500 mt-1">
            Availability · Performance · Quality
          </p>
        </div>

        {/* 🔷 Right (Export Buttons) */}
        {canExportOee && (
          <div className="flex gap-3">
          <button
            onClick={handlePDF}
            className="
              flex items-center gap-2
              px-5 py-2.5
              rounded-xl
              bg-white border border-gray-200
              text-red-600 font-semibold
              shadow-sm
              hover:bg-gray-50
            "
          >
            <Download size={18} />
            Export PDF
          </button>

          <button
            onClick={handleExcel}
            className="
              flex items-center gap-2
              px-5 py-2.5
              rounded-xl
              bg-green-600 text-white
              font-semibold
              shadow-sm
              hover:bg-green-700
            "
          >
            <FileSpreadsheet size={18} />
            Export Excel
          </button>
          </div>
        )}
      </div>

      {/* 🔷 KPI Section */}
      <div className="mb-6">
        <KPISection data={kpis} />
      </div>

      {/* 🔷 Breakdown + Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b">
            <h2 className="text-base font-semibold text-gray-800">
              OEE Breakdown
            </h2>
          </div>
          <div className="px-5 py-5">
            <OEEBreakdownBar />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b">
            <h2 className="text-base font-semibold text-gray-800">
              30-Day OEE Trend
            </h2>
          </div>
          <div className="px-5 py-5">
            <OEETrendChart data={trendData} />
          </div>
        </div>
      </div>

      {/* 🔷 Downtime Table */}
      <div className="mb-6 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b">
          <h2 className="text-base font-semibold text-gray-800">
            Downtime Event Log
          </h2>
        </div>
        <div className="px-5 py-5">
          <DowntimeTable data={downtimeEvents} />
        </div>
      </div>

      {/* 🔷 Downtime Form */}
      {canWriteDowntime && (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b">
          <h2 className="text-base font-semibold text-gray-800">
            Log Downtime Event
          </h2>
        </div>
        <div className="px-5 py-5">
          <DowntimeForm />
        </div>
        </div>
      )}
    </PageContainer>
  );
}
