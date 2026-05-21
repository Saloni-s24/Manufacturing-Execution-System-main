// ConnectionActions.jsx

import Button from "../../../components/ui/Button";
import Toast from "../../../components/ui/Toast";

export default function ConnectionActions() {

  const handleTest = () => {
    Toast.show("Pinging all SAP endpoints...");
  };

  const handleSync = () => {
    Toast.show("Running full SAP synchronization...");
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>

      <Button onClick={handleTest}>
        Test Connection
      </Button>

      <Button variant="secondary" onClick={handleSync}>
        Full Sync
      </Button>

    </div>
  );
}