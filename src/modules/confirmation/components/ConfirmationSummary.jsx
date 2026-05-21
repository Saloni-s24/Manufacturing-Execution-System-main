import {
  Target,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

export default function ConfirmationSummary({ order }) {

  if (!order) {
    return (
      <div className="text-gray-500 text-sm">
        No order selected
      </div>
    );
  }

  const remaining =
    order.targetQty -
    order.confirmedQty -
    order.scrapQty;

  return (
    <div className="space-y-3">

      <SummaryCard
        label="Target Qty"
        value={order.targetQty}
        icon={Target}
        style="bg-indigo-50 border-indigo-400 text-indigo-700"
      />

      <SummaryCard
        label="Confirmed Qty"
        value={order.confirmedQty}
        icon={CheckCircle2}
        style="bg-emerald-50 border-emerald-400 text-emerald-700"
      />

      <SummaryCard
        label="Scrap Qty"
        value={order.scrapQty}
        icon={AlertTriangle}
        style="bg-orange-50 border-orange-400 text-orange-700"
      />

      <SummaryCard
        label="Remaining Qty"
        value={remaining}
        icon={BarChart3}
        style="bg-blue-50 border-blue-400 text-blue-700"
      />

    </div>
  );
}


/* 🔷 Card Component (SAP-style like your image) */
const SummaryCard = ({
  label,
  value,
  icon: Icon,
  style,
}) => {
  return (
    <div
      className={`
        flex items-center gap-3
        px-4 py-3
        rounded-lg
        border-l-4
        border
        ${style}
      `}
    >
      {/* Icon */}
      <div>
        <Icon size={18} />
      </div>

      {/* Text */}
      <div className="leading-tight">
        <p className="text-xs font-medium uppercase tracking-wide opacity-70">
          {label}
        </p>

        <h4 className="text-base font-semibold">
          {value ?? "-"}
        </h4>
      </div>
    </div>
  );
};