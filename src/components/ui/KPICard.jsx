const KPICard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
  bg,
  text,
  onClick,
}) => {
  // Dynamic subtitle colors
  const getSubtitleColor = () => {
    if (
      subtitle.includes("↑") ||
      subtitle.includes("target") ||
      subtitle.includes("vs yesterday")
    ) {
      return "text-green-700 bg-green-100";
    }

    if (
      subtitle.includes("↓") ||
      subtitle.includes("behind") ||
      subtitle.includes("critical")
    ) {
      return "text-red-700 bg-red-100";
    }

    if (subtitle.includes("due")) {
      return "text-orange-700 bg-orange-100";
    }

    return "text-gray-700 bg-gray-100";
  };

  const CardTag = onClick ? "button" : "div";

  return (
    <CardTag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white rounded-2xl
        border-t-4 ${color}
        px-5 py-5
        shadow-sm
        hover:shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        min-h-[160px]
        w-full text-left
        ${onClick ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" : ""}
      `}
    >
      {/* Soft Glow */}
      <div
        className={`
          absolute -top-6 -right-6
          w-28 h-28 rounded-full
          opacity-10 blur-3xl
          ${bg}
        `}
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="pt-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">{value}</h2>
        </div>

        {/* Bigger Right Icon */}
        <div
          className={`
    absolute right-5 top-1/2 -translate-y-1/2
    w-20 h-20 rounded-2xl
    flex items-center justify-center
    ${bg} ${text}
    opacity-90
  `}
        >
          <Icon size={42} />
        </div>
      </div>

      {/* Bigger Status Badge */}
      <div className="mt-5">
        <span
          className={`
            inline-flex items-center
            px-3 py-1.5
            rounded-full
            text-sm font-semibold
            ${getSubtitleColor()}
          `}
        >
          {subtitle}
        </span>
      </div>
    </CardTag>
  );
};

export default KPICard;
