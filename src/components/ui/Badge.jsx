const Badge = ({
  text,
  type = "info",
}) => {
  const styles = {
    success:
      "bg-green-100 text-green-600",

    warning:
      "bg-yellow-100 text-yellow-700",

    danger:
      "bg-red-100 text-red-600",

    info:
      "bg-blue-100 text-blue-600",

    neutral:
      "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${styles[type]}`}
    >
      {text}
    </span>
  );
};

export default Badge;