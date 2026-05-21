import Table from "../../../components/ui/Table";

export default function ConfirmationHistoryTable({ data = [] }) {

  const headers = [
    "Conf #",
    "Order",
    "Operation",
    "Yield",
    "Scrap",
    "Machine Hr",
    "Type",
    "Posted",
  ];

  const getTypeStyle = (type) => {
    switch (type) {
      case "Final":
        return "bg-green-100 text-green-700";
      case "Partial":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Table headers={headers}>
      {data.length > 0 ? (
        data.map((row, index) => (
          <tr key={index}>

            {/* Conf # */}
            <td className="px-6 py-5 font-semibold text-blue-700">
              {row.confNo}
            </td>

            {/* Order */}
            <td className="px-6 py-5 text-slate-700">
              {row.order}
            </td>

            {/* Operation */}
            <td className="px-6 py-5 text-slate-700">
              {row.operation}
            </td>

            {/* Yield */}
            <td className="px-6 py-5 font-semibold text-green-600">
              {row.yield}
            </td>

            {/* Scrap */}
            <td className="px-6 py-5 font-semibold text-red-500">
              {row.scrap}
            </td>

            {/* Machine Hours */}
            <td className="px-6 py-5 text-slate-700 font-medium">
              {row.machineHours}
            </td>

            {/* Type Badge */}
            <td className="px-6 py-5">
              <span
                className={`
                  px-3 py-1 rounded-full text-xs font-semibold
                  ${getTypeStyle(row.type)}
                `}
              >
                {row.type}
              </span>
            </td>

            {/* Posted Date */}
            <td className="px-6 py-5 text-gray-500 text-sm">
              {row.postedDate}
            </td>

          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={headers.length}
            className="px-6 py-8 text-center text-gray-500"
          >
            No confirmation history available
          </td>
        </tr>
      )}
    </Table>
  );
}