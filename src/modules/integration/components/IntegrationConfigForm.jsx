// IntegrationConfigForm.jsx

import Button from "../../../components/ui/Button";
import Toast from "../../../components/ui/Toast";

export default function IntegrationConfigForm() {

  const handleSave = () => {
    Toast.show("Configuration saved");
  };

  return (
    <div style={{ display: "grid", gap: 10 }}>

      <input
        defaultValue="https://sap-btp-dev.apcrest.com"
        placeholder="SAP Host"
      />

      <input defaultValue="100" placeholder="Client" />

      <select>
        <option>Basic Auth</option>
        <option>OAuth2</option>
        <option>SAML</option>
      </select>

      <select>
        <option>5 min</option>
        <option>15 min</option>
        <option>30 min</option>
      </select>

      <input placeholder="BTP Tenant" />

      <textarea
        defaultValue="MES_PP_SYNC, MES_QM_SYNC, MES_MM_SYNC"
      />

      <Button onClick={handleSave}>
        Save Configuration
      </Button>

    </div>
  );
}