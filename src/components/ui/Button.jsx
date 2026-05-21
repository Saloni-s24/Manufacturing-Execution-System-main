const Button = ({
  children,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary:
      "bg-blue-500 hover:bg-blue-600 text-white",

    secondary:
      "bg-white border border-gray-300 hover:bg-gray-100",

    success:
      "bg-green-500 hover:bg-green-600 text-white",

    warning:
      "bg-yellow-500 hover:bg-yellow-600 text-white",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      {...props}   // ✅ THIS FIXES YOUR ISSUE
      className={`px-4 py-2 rounded font-medium transition-all ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;