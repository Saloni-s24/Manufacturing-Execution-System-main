import Table from "../../../components/ui/Table";

export default function DowntimeTable({ data = [] }) {

  const headers = [
    "Machine",
    "Start",
    "Duration",
    "Category",
    "Reason",
    "Status",
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Open":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Table headers={headers}>
      {data.length > 0 ? (
        data.map((row, index) => (
          <tr key={index}>

            {/* Machine */}
            <td className="px-6 py-5 font-semibold text-slate-800">
              {row.machine}
            </td>

            {/* Start */}
            <td className="px-6 py-5 text-slate-700">
              {row.start}
            </td>

            {/* Duration */}
            <td className="px-6 py-5 text-slate-700">
              {row.duration}
            </td>

            {/* Category */}
            <td className="px-6 py-5 text-slate-700">
              {row.category}
            </td>

            {/* Reason */}
            <td className="px-6 py-5 text-slate-700">
              {row.reason}
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
        ))
      ) : (
        <tr>
          <td
            colSpan={headers.length}
            className="px-6 py-8 text-center text-gray-500"
          >
            No downtime records
          </td>
        </tr>
      )}
    </Table>
  );
}