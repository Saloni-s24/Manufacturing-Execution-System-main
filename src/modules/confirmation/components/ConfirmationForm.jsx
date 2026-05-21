import { useState } from "react";
import Toast from "../../../components/ui/Toast";
import { CheckCircle2, Save } from "lucide-react";

export default function ConfirmationForm({
  orders,
  selectedOrder,
  setSelectedOrder,
}) {
  const [yieldQty, setYieldQty] = useState(0);
  const [scrapQty, setScrapQty] = useState(0);

  const handleOrderChange = (e) => {
    const found = orders.find(
      (o) => o.order === e.target.value
    );
    setSelectedOrder(found);
  };

  const handlePost = () => {
    if (!selectedOrder) {
      Toast.show("Select order first");
      return;
    }

    Toast.show("Posting confirmation to SAP CO11N...");
  };

  const handleDraft = () => {
    Toast.show("Draft saved");
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm">

      {/* 🔷 Top Right Badge ONLY (no duplicate header) */}
      <div className="flex justify-end px-5 pt-3">
        <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
          Operation Confirmation
        </span>
      </div>

      {/* 🔷 Form */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

        {/* Order */}
        <div>
          <label className="text-gray-600 font-medium">
            Production Order #
          </label>
          <select
            value={selectedOrder?.order || ""}
            onChange={handleOrderChange}
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          >
            <option value="">Select</option>
            {orders.map((o) => (
              <option key={o.order} value={o.order}>
                {o.order}
              </option>
            ))}
          </select>
        </div>

        {/* Operation */}
        <div>
          <label className="text-gray-600 font-medium">
            Operation #
          </label>
          <input
            value={
              selectedOrder
                ? `${selectedOrder.operation} - CNC Machining`
                : ""
            }
            readOnly
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-100"
          />
        </div>

        {/* Work Center */}
        <div>
          <label className="text-gray-600 font-medium">
            Work Center
          </label>
          <input
            value={selectedOrder?.workCenter || ""}
            readOnly
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-100"
          />
        </div>

        {/* Quantities */}
        <div>
          <label className="text-gray-600 font-medium">
            Yield Qty (Good)
          </label>
          <input
            type="number"
            value={yieldQty}
            onChange={(e) => setYieldQty(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">
            Scrap Qty
          </label>
          <input
            type="number"
            value={scrapQty}
            onChange={(e) => setScrapQty(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">
            Rework Qty
          </label>
          <input
            type="number"
            defaultValue={0}
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          />
        </div>

        {/* Time */}
        <div>
          <label className="text-gray-600 font-medium">
            Actual Setup Time (hr)
          </label>
          <input
            defaultValue={0.5}
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">
            Actual Machine Time (hr)
          </label>
          <input
            defaultValue={4.2}
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">
            Actual Labour Time (hr)
          </label>
          <input
            defaultValue={4.0}
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          />
        </div>

        {/* Final Section */}
        <div>
          <label className="text-gray-600 font-medium">
            Employee / Operator
          </label>
          <input
            value="Abhinav Mishra"
            readOnly
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-100"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">
            Posting Date
          </label>
          <input
            type="date"
            className="mt-1 w-full px-3 py-2 rounded border bg-gray-50"
          />
        </div>

        <div>
          <label className="text-gray-600 font-medium">
            Final Confirmation?
          </label>
          <select className="mt-1 w-full px-3 py-2 rounded border bg-gray-50">
            <option>No - Partial</option>
            <option>Yes - Final</option>
          </select>
        </div>

      </div>

      {/* 🔷 Actions */}
      <div className="px-5 py-4 border-t flex gap-3">

        <button
          onClick={handlePost}
          className="
            flex items-center gap-2
            px-5 py-2.5
            rounded-lg
            bg-blue-600 text-white font-semibold
            hover:bg-blue-700
          "
        >
          <CheckCircle2 size={18} />
          Post Confirmation to SAP
        </button>

        <button
          onClick={handleDraft}
          className="
            flex items-center gap-2
            px-5 py-2.5
            rounded-lg
            border border-gray-300
            bg-white
            text-gray-700
            hover:bg-gray-50
          "
        >
          <Save size={18} />
          Save Draft
        </button>

      </div>

    </div>
  );
}