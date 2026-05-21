// src/modules/quality/pages/QualityPage.jsx

import { RefreshCcw } from "lucide-react";

import PageContainer from "../../../components/ui/PageContainer";
import Toast from "../../../components/ui/Toast";

import InspectionLotsTable from "../components/InspectionLotsTable";
import InspectionForm from "../components/InspectionForm";
import NCForm from "../components/NCForm";
import NCTable from "../components/NCTable";

import { inspectionLots, ncReports } from "../data/qualityData";
import { PERMISSIONS } from "../../../constants/permissions";
import { canAccess, getStoredUser } from "../../../utils/canAccess";

export default function QualityPage() {
  const user = getStoredUser();
  const canWriteInspection = canAccess(
    user,
    PERMISSIONS.QUALITY_INSPECTION_WRITE
  );
  const canWriteNc = canAccess(user, PERMISSIONS.NC_HANDLING_WRITE);
  const handleSync = () => {
    Toast.show("Syncing inspection lots from SAP...", "info");
  };

  return (
    <PageContainer>

      {/* 🔷 Header */}
      <div className="mb-6 flex items-center justify-between">
        
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Quality Management
          </h1>

          <p className="text-gray-500 mt-1">
            Inspection lots & non-conformance handling
          </p>
        </div>

        {/* Right */}
        {canWriteInspection && (
          <button
            onClick={handleSync}
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
            active:scale-95
          "
          >
            <RefreshCcw size={18} />
            Sync Inspection Lots
          </button>
        )}

      </div>

      {/* 🔷 Inspection Lots */}
      <div className="mb-6 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            Inspection Lots
          </h2>
        </div>

        <div className="px-5 py-5">
          <InspectionLotsTable data={inspectionLots} />
        </div>

      </div>

      {/* 🔷 NC Reports */}
      <div className="mb-6 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            NC Reports
          </h2>
        </div>

        <div className="px-5 py-5">
          <NCTable data={ncReports} />
        </div>

      </div>

      {/* 🔷 Forms Section (Side-by-side on desktop) */}
      {(canWriteInspection || canWriteNc) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {canWriteInspection && (
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-800">
              Record Inspection Result
            </h2>
          </div>

          <div className="px-5 py-5">
            <InspectionForm />
          </div>

            </div>
          )}

          {canWriteNc && (
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-800">
              Raise NC Report
            </h2>
          </div>

          <div className="px-5 py-5">
            <NCForm />
          </div>

            </div>
          )}

        </div>
      )}

    </PageContainer>
  );
}
