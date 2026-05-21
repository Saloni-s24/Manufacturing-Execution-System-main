import Button from "../../../components/ui/Button";
import Toast from "../../../components/ui/Toast";

export default function GoodsReceiptForm() {

  const handlePost = () => {
    Toast.show("Posting Goods Receipt (101) to SAP...", "info");
  };

  return (
    <div className="space-y-5">

      {/* 🔷 Header Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* PO */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Purchase Order
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
            <option>PO-100423</option>
          </select>
        </div>

        {/* Movement */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Movement Type
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
            <option>101 - GR</option>
            <option>102 - Reversal</option>
          </select>
        </div>

      </div>

      {/* 🔷 Material Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Material */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Material
          </label>
          <input
            value="MAT-7001"
            readOnly
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm"
          />
        </div>

        {/* Qty */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            GR Quantity
          </label>
          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* UOM */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            UOM
          </label>
          <input
            value="EA"
            readOnly
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm"
          />
        </div>

      </div>

      {/* 🔷 Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Storage Location */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Storage Location
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
            <option>SL-FG01</option>
          </select>
        </div>

        {/* Batch */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Batch Number
          </label>
          <input
            placeholder="Enter batch"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Posting Date */}
        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Posting Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

      </div>

      {/* 🔷 Actions */}
      <div className="flex justify-end pt-2">
        <Button onClick={handlePost}>
          Post GR
        </Button>
      </div>

    </div>
  );
}