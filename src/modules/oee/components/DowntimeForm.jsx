import Button from "../../../components/ui/Button";
import Toast from "../../../components/ui/Toast";

export default function DowntimeForm() {

  const handleSubmit = () => {
    Toast.show("Downtime event logged");
  };

  return (
    <div className="space-y-5">

      {/* 🔷 Machine + Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Machine */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Machine
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
            <option>CNC-01</option>
            <option>CNC-02</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Downtime Category
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
            <option>Breakdown</option>
            <option>Planned Maintenance</option>
            <option>Setup/Changeover</option>
            <option>Tooling Change</option>
            <option>Material Shortage</option>
            <option>Quality Hold</option>
          </select>
        </div>

      </div>

      {/* 🔷 Time Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Start Time */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Start Time
          </label>
          <input
            type="datetime-local"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* End Time */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            End Time
          </label>
          <input
            type="datetime-local"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

      </div>

      {/* 🔷 Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Related Order */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Related Order
          </label>
          <input
            placeholder="Enter production order"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Reason
          </label>
          <input
            placeholder="Short reason"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

      </div>

      {/* 🔷 Description */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1 block">
          Description
        </label>
        <textarea
          rows={3}
          placeholder="Enter detailed description..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* 🔷 Actions */}
      <div className="flex justify-end pt-2">
        <Button onClick={handleSubmit}>
          Log Downtime
        </Button>
      </div>

    </div>
  );
}