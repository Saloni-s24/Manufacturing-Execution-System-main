// src/pages/WorkCenters.jsx

import { RefreshCcw, AlertTriangle } from "lucide-react";

import PageContainer from "../../../components/ui/PageContainer";
import Toast from "../../../components/ui/Toast";

import GanttChart from "../components/GanttChart";
import WorkCenterTable from "../components/WorkCenterTable";

import { ganttData, workCenters } from "../data/workcenterData";

import { useNavigate } from "react-router-dom";

export default function WorkCenters() {
  const navigate = useNavigate();
  const handleRefresh = () => {
    Toast.show("Syncing from SAP CR05...");
  };

  const handleDowntime = () => {
    navigate("/oee");
  };

  return (
    <PageContainer>
      {/* 🔷 Header */}
      <div className="mb-6 flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Work Centers</h1>

          <p className="text-gray-500 mt-1">
            Machine tracking & production scheduling
          </p>
        </div>

        {/* Right */}
        <div className="flex gap-3">
          <button
            onClick={handleRefresh}
            className="
      flex items-center gap-2
      px-5 py-2.5
      rounded-xl
      bg-white
      border border-gray-200
      text-blue-600
      font-semibold
      shadow-sm
      hover:bg-gray-50
      transition-all duration-200
      active:scale-95
    "
          >
            <RefreshCcw size={18} />
            Refresh
          </button>

          <button
            onClick={handleDowntime}
            className="
      flex items-center gap-2
      px-5 py-2.5
      rounded-xl
      bg-orange-500
      text-white
      font-semibold
      shadow-sm
      hover:bg-orange-600
      transition-all duration-200
      active:scale-95
    "
          >
            <AlertTriangle size={18} />
            Downtime
          </button>
        </div>
      </div>

      {/* 🔷 Gantt Section */}
      <div className="mb-6 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            Production Schedule Gantt Chart
          </h2>
        </div>

        <div className="px-5 py-5">
          <GanttChart data={ganttData} />
        </div>
      </div>

      {/* 🔷 Work Center Table */}
      <WorkCenterTable data={workCenters} />
    </PageContainer>
  );
}
