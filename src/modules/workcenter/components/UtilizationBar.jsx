// UtilizationBar.jsx

const getColor = (val) => {
  if (val >= 85)
    return "bg-green-700";

  if (val >= 50)
    return "bg-blue-600";

  if (val >= 20)
    return "bg-orange-500";

  return "bg-gray-300";
};

export default function UtilizationBar({
  value,
}) {
  return (
    <div className="w-full">

      {/* Progress Track */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        {/* Progress Fill */}
        <div
          className={`h-full rounded-full transition-all duration-500 ${getColor(
            value
          )}`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>

      {/* Percentage */}
      <div className="text-xs text-gray-500 mt-1 font-medium">
        {value}%
      </div>
    </div>
  );
}