// SeverityBadge.jsx

const colorMap = {
  Critical: "error",
  Major: "warning",
  Minor: "info"
};

export default function SeverityBadge({ severity }) {
  return (
    <span style={{
      padding: "2px 8px",
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 600,
      background: "#f5f5f5"
    }}>
      {severity}
    </span>
  );
}