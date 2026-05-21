// ConnectionStatus.jsx

export default function ConnectionStatus({ data }) {

  const connected = data.status === "Connected";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: 12
      }}
    >

      <div>Host: {data.host}</div>

      <div>Client: {data.client}</div>

      <div>RFC User: {data.user}</div>

      <div>
        Status:
        <span
          style={{
            color: connected ? "green" : "red",
            fontWeight: 600,
            marginLeft: 6
          }}
        >
          {data.status}
        </span>
      </div>

      <div>Latency: {data.latency} ms</div>

    </div>
  );
}