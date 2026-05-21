// IntegrationChannels.jsx

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Toast from "../../../components/ui/Toast";

export default function IntegrationChannels({ data }) {

  const handleTest = (module) => {
    Toast.show(`Testing ${module} endpoint...`);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 16
      }}
    >

      {data.map((c) => (
        <Card key={c.module}>

          <div style={{ display: "grid", gap: 10 }}>

            <h3>{c.module}</h3>

            <div>iFlow: {c.iflow}</div>

            <div>{c.endpoint}</div>

            <div
              style={{
                color:
                  c.status === "Active"
                    ? "green"
                    : "orange",
                fontWeight: 600
              }}
            >
              {c.status}
            </div>

            <Button
              variant="secondary"
              onClick={() => handleTest(c.module)}
            >
              Test {c.module}
            </Button>

          </div>

        </Card>
      ))}

    </div>
  );
}