import Table from "../../../components/ui/Table";

export default function IntegrationLogsTable({ data = [] }) {

  const columns = [
    { header: "Time", accessor: "time" },
    { header: "Method", accessor: "method" },
    { header: "Endpoint", accessor: "endpoint" },
    {
      header: "Status",
      render: (row) => (
        <span
          style={{
            color:
              row.status === "SUCCESS"
                ? "green"
                : row.status === "WARNING"
                ? "orange"
                : "red",
            fontWeight: 600
          }}
        >
          {row.status}
        </span>
      )
    },
    { header: "Document", accessor: "document" }
  ];

  return (
    <Table headers={columns.map(col => col.header)}>
      {data.length > 0 ? (
        data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-t">
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="p-3 text-sm">
                {col.render
                  ? col.render(row)
                  : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={columns.length}
            className="p-3 text-center text-gray-500"
          >
            No integration logs
          </td>
        </tr>
      )}
    </Table>
  );
}