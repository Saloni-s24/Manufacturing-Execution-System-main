// StatusIndicator.jsx

const statusMap = {
  Running: "🟢",
  Down: "🔴",
  Setup: "🟡",
  Idle: "⚪"
};

export default function StatusIndicator({ status }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span>{statusMap[status]}</span>
      {status}
    </span>
  );
}