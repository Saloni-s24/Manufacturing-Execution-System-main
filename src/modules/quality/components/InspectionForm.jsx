import Button from "../../../components/ui/Button";
import Toast from "../../../components/ui/Toast";

export default function InspectionForm() {

  const handleSubmit = () => {
    Toast.show("Posting result to SAP QA11...", "info");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Characteristic */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Characteristic
        </label>
        <input
          type="text"
          placeholder="Enter characteristic"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Target Value */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Target Value
        </label>
        <input
          type="text"
          placeholder="Enter target value"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Tolerance */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Tolerance
        </label>
        <input
          type="text"
          placeholder="e.g. ±5%"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Measured Value */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Measured Value
        </label>
        <input
          type="text"
          placeholder="Enter measured value"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Result */}
      <div className="md:col-span-2">
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Result
        </label>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <option>PASS</option>
          <option>FAIL</option>
        </select>
      </div>

<div className="md:col-span-2 flex justify-end mt-2">
  <Button onClick={handleSubmit}>
    Post Result to SAP
  </Button>
</div>

    </div>
  );
}