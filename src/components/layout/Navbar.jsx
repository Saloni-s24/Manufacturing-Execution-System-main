import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Factory,
  ShieldCheck,
  Boxes,
  CheckCircle2,
  BarChart3,
  Database,
} from "lucide-react";
import { PERMISSIONS } from "../../constants/permissions";
import { canAccess, getStoredUser } from "../../utils/canAccess";

const Navbar = () => {
  const user = getStoredUser();
  const tabs = [
    {
      name: "Operator Dashboard",
      path: "/",
      icon: <LayoutDashboard size={18} />,
      permission: PERMISSIONS.DASHBOARD_READ,
    },
    {
      name: "Production Orders",
      path: "/production-orders",
      icon: <ClipboardList size={18} />,
      permission: PERMISSIONS.PRODUCTION_ORDERS_READ,
    },
    {
      name: "Work Centers",
      path: "/work-centers",
      icon: <Factory size={18} />,
      permission: PERMISSIONS.WORK_CENTERS_READ,
    },
    {
      name: "Quality Page",
      path: "/quality-page",
      icon: <ShieldCheck size={18} />,
      permission: PERMISSIONS.QUALITY_INSPECTION_READ,
    },
    {
      name: "Material & Goods",
      path: "/material-goods",
      icon: <Boxes size={18} />,
      permission: PERMISSIONS.MATERIAL_READ,
    },
    {
      name: "Confirmation",
      path: "/confirmation",
      icon: <CheckCircle2 size={18} />,
      permission: PERMISSIONS.CONFIRMATION_READ,
    },
    {
      name: "OEE & Downtime",
      path: "/oee",
      icon: <BarChart3 size={18} />,
      permission: PERMISSIONS.OEE_READ,
    },
    {
      name: "SAP Integration",
      path: "/sap-integration",
      icon: <Database size={18} />,
      permission: PERMISSIONS.SAP_INTEGRATION_READ,
    },
  ].filter((tab) => canAccess(user, tab.permission));

  return (
    <div className="bg-slate-800 flex px-6 overflow-x-auto shadow-md">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-4 text-lg font-semibold whitespace-nowrap transition-all duration-200 border-b-2
  ${
    isActive
      ? "text-white border-blue-500 bg-slate-700"
      : "text-gray-300 border-transparent hover:text-white hover:bg-slate-700"
  }`
          }
        >
          {tab.icon}
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
