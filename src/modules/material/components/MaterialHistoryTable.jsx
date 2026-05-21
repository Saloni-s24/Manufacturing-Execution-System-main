import Table from "../../../components/ui/Table";

export default function MaterialHistoryTable({ data = [] }) {

  const headers = [
    "Doc #",
    "Year",
    "Type",
    "Material",
    "Qty",
    "Order",
    "User",
    "Date",
    "Status",
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Posted":
        return "bg-green-100 text-green-700";
      case "Draft":
        return "bg-orange-100 text-orange-700";
      case "Error":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Table headers={headers}>
      {data.map((row, index) => (
        <tr key={index}>

          <td className="px-6 py-5 font-semibold text-slate-800">
            {row.doc}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.year}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.type}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.material}
          </td>

          <td className="px-6 py-5 font-medium text-slate-700">
            {row.qty}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.order}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.user}
          </td>

          <td className="px-6 py-5 text-slate-700">
            {row.date}
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