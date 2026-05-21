import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getStoredUser } from "../../utils/canAccess";

const ShellBar = () => {
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const user = getStoredUser();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("mes_user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-slate-700 h-14 flex items-center px-6 text-white shadow-md">
      <div className="bg-blue-500 w-10 h-10 rounded flex items-center justify-center font-bold">
        MES
      </div>

      <div className="ml-4">
        <h1 className="font-semibold text-lg">
          Manufacturing Execution System
        </h1>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="bg-red-500 px-2 py-1 rounded-full text-xs">
          3
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
            {user?.name
              ?.split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2) ?? "ME"}
          </div>

          <div className="leading-tight">
            <div>{user?.name ?? "MES User"}</div>
            <div className="text-xs text-gray-300">
              {user?.role ?? "No role selected"}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-300">
          {time}
        </div>

        <button
          onClick={handleLogout}
          className="rounded bg-slate-600 px-3 py-1.5 text-sm hover:bg-slate-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ShellBar;
