import React from "react";

const Table = ({ headers, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-blue-200 overflow-hidden">

      <div className="overflow-x-auto m-3 bg-white rounded-2xl border border-slate-200">
        <table className="w-full">

          {/* Header */}
          <thead className="bg-blue-50 border-b border-blue-200">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-100">
            {React.Children.map(children, (child, index) => {
              if (!React.isValidElement(child)) return child;

              const isSelected =
                child.props.className?.includes("selected-row");

              return React.cloneElement(child, {
                className: `
                  transition-all duration-200
                  ${!isSelected ? "hover:bg-blue-50/40" : ""}
                  ${index % 2 === 0 ? "bg-white" : "bg-gray-50/40"}
                  ${child.props.className || ""}
                `,
              });
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Table;