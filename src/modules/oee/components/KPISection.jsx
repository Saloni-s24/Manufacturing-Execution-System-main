import KPICard from "../../../components/ui/KPICard";

import {
  Activity,
  Gauge,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Wrench,
} from "lucide-react";

export default function KPISection({ data = {} }) {

  const kpiData = [
    {
      title: "Overall OEE",
      value: `${data.oee || 0}%`,
      subtitle: "vs yesterday ↑",
      icon: Gauge,
      color: "border-blue-500",
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      title: "Availability",
      value: `${data.availability || 0}%`,
      subtitle: "on target ↑",
      icon: Activity,
      color: "border-indigo-500",
      bg: "bg-indigo-100",
      text: "text-indigo-600",
    },
    {
      title: "Performance",
      value: `${data.performance || 0}%`,
      subtitle: "slightly behind ↓",
      icon: TrendingUp,
      color: "border-orange-500",
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
    {
      title: "Quality",
      value: `${data.quality || 0}%`,
      subtitle: "within target ↑",
      icon: CheckCircle,
      color: "border-green-500",
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Downtime",
      value: `${data.downtime || 0} min`,
      subtitle: "due maintenance",
      icon: AlertTriangle,
      color: "border-red-500",
      bg: "bg-red-100",
      text: "text-red-600",
    },
    {
      title: "MTTR",
      value: `${data.mttr || 0} min`,
      subtitle: "critical ↓",
      icon: Wrench,
      color: "border-gray-500",
      bg: "bg-gray-100",
      text: "text-gray-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6">
      {kpiData.map((item, index) => (
        <KPICard key={index} {...item} />
      ))}
    </div>
  );
}