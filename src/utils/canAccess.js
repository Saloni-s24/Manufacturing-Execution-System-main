import { ROLE_PERMISSIONS } from "../constants/permissions";

export const getStoredUser = () => {
  const rawUser = localStorage.getItem("mes_user");

  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser);
  } catch {
    return null;
  }
};

export const canAccess = (user, permission) => {
  if (!user?.role || !permission) {
    return false;
  }

  return ROLE_PERMISSIONS[user.role]?.includes(permission) ?? false;
};
