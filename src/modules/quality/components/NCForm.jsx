import Button from "../../../components/ui/Button";
import Toast from "../../../components/ui/Toast";

export default function NCForm() {

  const handleSubmit = () => {
    Toast.show("NC Report created in SAP QM02", "success");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Order */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Order #
        </label>
        <input
          type="text"
          placeholder="Enter order number"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Inspection Lot */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Inspection Lot #
        </label>
        <input
          type="text"
          placeholder="Enter lot number"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Defect Type */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Defect Type
        </label>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option>Surface Scratch</option>
          <option>Dimension Issue</option>
        </select>
      </div>

      {/* Quantity */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          NC Quantity
        </label>
        <input
          type="number"
          placeholder="Enter quantity"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Severity */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Severity
        </label>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option>Critical</option>
          <option>Major</option>
          <option>Minor</option>
        </select>
      </div>

      {/* Disposition */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Disposition
        </label>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option>Rework</option>
          <option>Scrap</option>
          <option>Use As Is</option>
          <option>Return to Vendor</option>
        </select>
      </div>

      {/* Root Cause */}
      <div className="md:col-span-2">
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Root Cause
        </label>
        <textarea
          placeholder="Describe root cause..."
          rows={3}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Button */}
      <div className="md:col-span-2 flex justify-end mt-2">
        <Button onClick={handleSubmit}>
          Submit NC Report
        </Button>
      </div>

    </div>
  );
}