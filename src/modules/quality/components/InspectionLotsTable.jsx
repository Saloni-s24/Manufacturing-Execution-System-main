import Table from "../../../components/ui/Table";

export default function InspectionLotsTable({ data = [] }) {

  const headers = [
    "Lot #",
    "Order #",
    "Material",
    "Qty",
    "Result",
    "Status"
  ];

  const getResultStyle = (result) => {
    return result === "PASS"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Released":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Rejected":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Table headers={headers}>
      {data.map((row, index) => (
        <tr key={index}>

          <td className="px-6 py-5 font-semibold text-slate-800">
            {row.lot}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.order}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.material}
          </td>

          <td className="px-6 py-5 text-slate-700 font-medium">
            {row.qty}
          </td>

          {/* Result Badge */}
          <td className="px-6 py-5">
            <span
              className={`
                px-3 py-1 rounded-full text-xs font-semibold
                ${getResultStyle(row.result)}
              `}
            >
              {row.result}
            </span>
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