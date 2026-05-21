import { useState } from "react";

import Button from "../../../components/ui/Button";
import Table from "../../../components/ui/Table";
import Toast from "../../../components/ui/Toast";

export default function GoodsIssueForm({ components = [] }) {
  const [rows, setRows] = useState(components);

  const handleChange = (index, value) => {
    const updated = [...rows];
    updated[index].issuedQty = value;
    setRows(updated);
  };

  const handlePost = () => {
    Toast.show("Posting Goods Issue (261) to SAP...", "info");
  };

  const handleDraft = () => {
    Toast.show("Draft saved locally", "success");
  };

  const headers = [
    "Material",
    "Description",
    "Required",
    "Issued",
    "UOM",
    "Batch",
    "SLoc",
  ];

  return (
    <div className="space-y-5">

      {/* 🔷 Header Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Production Order
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
            <option>PO-100423</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Movement Type
          </label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm">
            <option>261 - Goods Issue</option>
            <option>262 - Reversal</option>
          </select>
        </div>

      </div>

      {/* 🔷 Table */}
      <Table headers={headers}>
        {rows.map((row, index) => (
          <tr key={index}>

            <td className="px-6 py-5 font-medium text-slate-800">
              {row.material}
            </td>

            <td className="px-6 py-5">
              {row.description}
            </td>

            <td className="px-6 py-5">
              {row.requiredQty}
            </td>

            <td className="px-6 py-5">
              <input
                type="number"
                value={row.issuedQty}
                onChange={(e) =>
                  handleChange(index, e.target.value)
                }
                className="w-20 px-2 py-1.5 rounded border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </td>

            <td className="px-6 py-5">
              {row.uom}
            </td>

            <td className="px-6 py-5">
              {row.batch}
            </td>

            <td className="px-6 py-5">
              {row.sloc}
            </td>

          </tr>
        ))}
      </Table>

      {/* 🔷 Actions */}
      <div className="flex justify-end gap-3 pt-2">

        <Button variant="secondary" onClick={handleDraft}>
          Save Draft
        </Button>

        <Button onClick={handlePost}>
          Post GI
        </Button>

      </div>

    </div>
  );
}