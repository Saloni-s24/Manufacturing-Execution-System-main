import Table from "../../../components/ui/Table";
import SeverityBadge from "./SeverityBadge";

export default function NCTable({ data = [] }) {
  const headers = ["QN #", "Order", "Defect", "Qty", "Severity", "Status"];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Closed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Table headers={headers}>
      {data.map((row, index) => (
        <tr key={index}>
          <td className="px-6 py-5 font-semibold text-slate-800">{row.qn}</td>

          <td className="px-6 py-5 text-slate-700">{row.order}</td>

          <td className="px-6 py-5 text-slate-700">{row.defect}</td>

          <td className="px-6 py-5 font-medium text-slate-700">{row.qty}</td>

          {/* Severity Badge (already good) */}
          <td className="px-6 py-5">
            <SeverityBadge severity={row.severity} />
          </td>

          {/* Status Badge */}
          <td className="px-6 py-5">
            <span
              className={`
                px-3 py-1 rounded-full text-xs font-semibold
                ${getStatusStyle(row.status)}
              `}
            >
              {row.status}
            </span>
          </td>
        </tr>
      ))}
    </Table>
  );
}
