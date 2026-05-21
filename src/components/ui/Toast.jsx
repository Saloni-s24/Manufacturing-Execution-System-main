import { createRoot } from "react-dom/client";

const ToastComponent = ({ message, type = "info" }) => {
  const bg =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`
        fixed bottom-5 right-5
        px-5 py-3
        rounded-xl
        shadow-lg
        text-white
        font-semibold
        ${bg}
      `}
    >
      {message}
    </div>
  );
};

const Toast = {
  show: (message, type = "info") => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = createRoot(container);

    root.render(<ToastComponent message={message} type={type} />);

    // Auto remove after 3 sec
    setTimeout(() => {
      root.unmount();
      container.remove();
    }, 3000);
  },
};

export default Toast;