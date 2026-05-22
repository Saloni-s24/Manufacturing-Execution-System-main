import Table from "../../../components/ui/Table";
import StatusIndicator from "./StatusIndicator";
import UtilizationBar from "./UtilizationBar";

export default function WorkCenterTable({ data }) {
  const headers = [
    "Order No",
    "Work Centre",
    "Operation",
    "Planned Start)",
    "Planned Finish",
    "Req. Capacity (hr)",
    "Confirmed Cap (hr)",
    "shift",
    "target units",
    "Actual units",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

      {/* 🔷 Header Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">
          Work Center Master Data
        </h2>

        <div className="px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
          {data.length} Centers
        </div>
      </div>

      {/* 🔷 Table */}
      <div className="px-5 pt-4 pb-5">
        <Table headers={headers}>
          {data.map((row) => (
            <tr key={row.id}>

              <td className="px-6 py-5 font-semibold text-slate-800">
                {row.id}
              </td>

              <td className="px-6 py-5">
                {row.description}
              </td>

              <td className="px-6 py-5">
                {row.category}
              </td>

              <td className="px-6 py-5">
                {row.capacity}
              </td>

              <td className="px-6 py-5 min-w-[220px]">
                <UtilizationBar value={row.utilization} />
              </td>

              <td className="px-6 py-5">
                {row.currentOrder ?? "—"}
              </td>

              <td className="px-6 py-5">
                {row.operator ?? "—"}
              </td>

              <td className="px-6 py-5">
                <StatusIndicator status={row.status} />
              </td>

            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}