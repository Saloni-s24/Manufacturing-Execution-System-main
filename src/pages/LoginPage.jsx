import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROLE_OPTIONS, ROLES } from "../constants/roles";

const LoginPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(ROLES.OPERATOR);

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedRole = ROLE_OPTIONS.find((item) => item.value === role);

    localStorage.setItem(
      "mes_user",
      JSON.stringify({
        name: selectedRole.label,
        role: selectedRole.value,
        sapRole: selectedRole.sapEquivalent,
      })
    );

    navigate("/", { replace: true });
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-slate-200 rounded-lg shadow-sm p-6"
      >
        <h1 className="text-2xl font-bold text-slate-900">MES Login</h1>
        <p className="mt-1 text-sm text-slate-500">
          Select a role to open the matching MES workspace.
        </p>

        <label className="block mt-6 text-sm font-medium text-slate-700">
          Authorization role
        </label>
        <select
          value={role}
          onChange={(event) => setRole(event.target.value)}
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900"
        >
          {ROLE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value} - {option.sapEquivalent}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700"
        >
          Continue
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
