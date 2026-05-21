import { useState } from "react";

import PageContainer from "../../../components/ui/PageContainer";

import ConfirmationForm from "../components/ConfirmationForm";
import ConfirmationHistoryTable from "../components/ConfirmationHistoryTable";
import ConfirmationSummary from "../components/ConfirmationSummary";
import CancelConfirmationForm from "../components/CancelConfirmationForm";

import {
  productionOrders,
  confirmationHistory,
} from "../data/confirmationData";
import { PERMISSIONS } from "../../../constants/permissions";
import { canAccess, getStoredUser } from "../../../utils/canAccess";

export default function ConfirmationPage() {
  const user = getStoredUser();
  const canWriteConfirmation = canAccess(
    user,
    PERMISSIONS.CONFIRMATION_WRITE
  );
  const [selectedOrder, setSelectedOrder] = useState(
    productionOrders[0] || null
  );

  return (
    <PageContainer>

      {/* 🔷 Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Production Confirmation
          </h1>

          <p className="text-gray-500 mt-1">
            CO11N · Time booking & yield confirmation
          </p>
        </div>
      </div>

      {/* 🔷 Form + Summary */}
      <div className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {canWriteConfirmation && (
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-800">
              Confirmation Entry
            </h2>
          </div>

          <div className="px-5 py-5">
            <ConfirmationForm
              orders={productionOrders}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
            />
          </div>

          </div>
        )}

        {/* Summary */}
        <div
          className={`bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden ${
            canWriteConfirmation ? "" : "lg:col-span-3"
          }`}
        >
          
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-800">
              Summary
            </h2>
          </div>

          <div className="px-5 py-5">
            <ConfirmationSummary order={selectedOrder} />
          </div>

        </div>

      </div>

      {/* 🔷 History */}
      <div className="mb-6 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            Confirmation History
          </h2>
        </div>

        <div className="px-5 py-5">
          <ConfirmationHistoryTable data={confirmationHistory} />
        </div>

      </div>

      {/* 🔷 Cancel */}
      {canWriteConfirmation && (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            Cancel Confirmation
          </h2>
        </div>

        <div className="px-5 py-5">
          <CancelConfirmationForm />
        </div>

        </div>
      )}

    </PageContainer>
  );
}
