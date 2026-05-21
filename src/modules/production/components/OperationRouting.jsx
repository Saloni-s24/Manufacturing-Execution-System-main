// src/components/OperationRouting.jsx

import Table from "../../../components/ui/Table";

const OperationRouting = ({ operations }) => {
  const headers = [
    "Operation",
    "Description",
    "Work Center",
    "Control Key",
    "Base Quantity",
    "Actual Time",
    "Status",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

      {/* 🔷 Header Bar (same as other cards) */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-white">
        
        <h2 className="text-lg font-semibold text-gray-800">
          Operations / Routing
        </h2>

        <div className="px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
          {operations?.length ?? 0} Ops
        </div>

      </div>

      {/* 🔷 Table Wrapper (same spacing) */}
      <div className="px-5 pt-4 pb-5">

        {!operations || operations.length === 0 ? (
          <Table headers={headers}>
            <tr>
              <td
                colSpan={headers.length}
                className="px-6 py-6 text-center text-gray-500"
              >
                No operations available
              </td>
            </tr>
          </Table>
        ) : (
          <Table headers={headers}>
            {operations.map((op) => (
              <tr key={op.operationNo}>
                
                <td className="px-6 py-5 font-semibold text-slate-700">
                  {op.operationNo ?? "-"}
                </td>

                <td className="px-6 py-5">
                  {op.description ?? "-"}
                </td>

                <td className="px-6 py-5">
                  {op.workCenter ?? "-"}
                </td>

                <td className="px-6 py-5">
                  {op.controlKey ?? "-"}
                </td>

                <td className="px-6 py-5">
                  {op.baseQty ?? "-"}
                </td>

                <td className="px-6 py-5">
                  {op.actualTime ?? "-"}
                </td>

                <td className="px-6 py-5">
                  {op.status ?? "-"}
                </td>

              </tr>
            ))}
          </Table>
        )}

      </div>
    </div>
  );
};

export default OperationRouting;