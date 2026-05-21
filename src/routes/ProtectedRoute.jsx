import { Navigate } from "react-router-dom";

import { canAccess, getStoredUser } from "../utils/canAccess";

const ProtectedRoute = ({ permission, children }) => {
  const user = getStoredUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!canAccess(user, permission)) {
    return (
      <main className="min-h-[calc(100vh-7rem)] bg-slate-100 p-6">
        <div className="max-w-xl rounded-lg border border-red-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Access denied</h1>
          <p className="mt-2 text-slate-600">
            Your current role is not authorized for this module.
          </p>
        </div>
      </main>
    );
  }

  return children;
};

export default ProtectedRoute;
