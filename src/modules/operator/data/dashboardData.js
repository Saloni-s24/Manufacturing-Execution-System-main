import {
  FiClipboard,
  FiCheckCircle,
  FiActivity,
  FiTrendingUp,
  FiAlertTriangle,
  FiTool,
} from "react-icons/fi";

export const kpiData = [
  {
    title: "Open Orders",
    value: "12",
    subtitle: "3 due today",
    color: "border-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-600",
    icon: FiClipboard,
  },
  {
    title: "Completed",
    value: "8",
    subtitle: "↑ 2 vs yesterday",
    color: "border-green-500",
    bg: "bg-green-50",
    text: "text-green-600",
    icon: FiCheckCircle,
  },
  {
    title: "In Progress",
    value: "4",
    subtitle: "2 behind schedule",
    color: "border-orange-500",
    bg: "bg-orange-50",
    text: "text-orange-600",
    icon: FiActivity,
  },
  {
    title: "Downtime",
    value: "37m",
    subtitle: "↑ 12m vs avg",
    color: "border-red-500",
    bg: "bg-red-50",
    text: "text-red-600",
    icon: FiTool,
  },
  {
    title: "OEE Today",
    value: "84%",
    subtitle: "↑ 3% vs target",
    color: "border-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    icon: FiTrendingUp,
  },
  {
    title: "NC Reports",
    value: "2",
    subtitle: "1 critical issue",
    color: "border-purple-500",
    bg: "bg-purple-50",
    text: "text-purple-600",
    icon: FiAlertTriangle,
  },
];

export const activeOrders = [
  {
    id: "PO-100423",
    material: "Gear Assembly X7",
    qty: 250,
    completed: 180,
    status: "Running",
  },
  {
    id: "PO-100431",
    material: "Motor Housing A3",
    qty: 100,
    completed: 40,
    status: "Delayed",
  },
  {
    id: "PO-100444",
    material: "Control Panel CP5",
    qty: 50,
    completed: 49,
    status: "Near Done",
  },
  {
    id: "PO-100450",
    material: "Bracket Assembly",
    qty: 400,
    completed: 60,
    status: "Running",
  },
];

export const shiftActivities = [
  {
    title: "PO-100423 Started",
    time: "08:12",
    desc: "Operator: Rajesh S · Machine: CNC-04",
    type: "info",
  },
  {
    title: "Downtime Reported — CNC-02",
    time: "09:45",
    desc: "Reason: Tooling change · Duration: 22 min",
    type: "warning",
  },
  {
    title: "PO-100415 Confirmed to SAP",
    time: "10:30",
    desc: "Qty: 200 pcs · GR posted",
    type: "success",
  },
  {
    title: "NC Raised - PO-100431",
    time: "11:15",
    desc: "Defect: Surface scratch · QN: 20000456",
    type: "warning",
  },
  {
    title: "Material Issued — PO-100444",
    time: "11:50",
    desc: "Material 100-300 · Batch B240 · 50 kg issued",
    type: "info",
  },
];

export const machineStatus = [
  {
    machine: "CNC-01",
    status: "Running",
    order: "PO-100423",
  },
  {
    machine: "CNC-02",
    status: "Down",
    order: "Maintenance",
  },
  {
    machine: "CNC-03",
    status: "Running",
    order: "PO-100431",
  },
  {
    machine: "CNC-04",
    status: "Running",
    order: "PO-100444",
  },
  {
    machine: "WELD-01",
    status: "Setup",
    order: "PO-100450",
  },
  {
    machine: "WELD-02",
    status: "Idle",
    order: "--",
  },
];
