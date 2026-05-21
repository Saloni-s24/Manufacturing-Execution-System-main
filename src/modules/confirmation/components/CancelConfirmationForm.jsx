import Toast from "../../../components/ui/Toast";
import { XCircle } from "lucide-react";

export default function CancelConfirmationForm() {

  const handleCancel = () => {
    Toast.show("Cancelling SAP Confirmation...");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Confirmation Number */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Confirmation #
        </label>
        <input
          type="text"
          placeholder="Enter confirmation number"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Confirmation Counter */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Confirmation Counter
        </label>
        <input
          type="text"
          placeholder="Enter counter"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Date */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Cancellation Date
        </label>
        <input
          type="date"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Reason */}
      <div className="md:col-span-2">
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Cancellation Reason
        </label>
        <textarea
          rows={3}
          placeholder="Enter reason for cancellation..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Action */}
      <div className="md:col-span-2 flex justify-end mt-2">
        <button
          onClick={handleCancel}
          className="
            flex items-center gap-2
            px-5 py-2.5
            rounded-xl
            bg-red-500 text-white font-semibold
            shadow-sm
            hover:bg-red-600
            transition-all duration-200
          "
        >
          <XCircle size={18} />
          Cancel Confirmation
        </button>
      </div>

    </div>
  );
}