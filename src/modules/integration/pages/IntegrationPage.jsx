// src/modules/integration/pages/IntegrationPage.jsx

import PageContainer from "../../../components/ui/PageContainer";
import Card from "../../../components/ui/Card";
import SectionTitle from "../../../components/ui/SectionTitle";

import ConnectionStatus from "../components/ConnectionStatus";
import IntegrationChannels from "../components/IntegrationChannels";
import IntegrationLogsTable from "../components/IntegrationLogsTable";
import ConnectionActions from "../components/ConnectionActions";
import IntegrationConfigForm from "../components/IntegrationConfigForm";

import {
  connectionInfo,
  channels,
  integrationLogs
} from "../data/integrationData";
import { PERMISSIONS } from "../../../constants/permissions";
import { canAccess, getStoredUser } from "../../../utils/canAccess";

export default function IntegrationPage() {
  const user = getStoredUser();
  const canConfigureIntegration = canAccess(
    user,
    PERMISSIONS.SAP_INTEGRATION_CONFIG
  );

  return (
    <PageContainer title="SAP Integration Suite">

      {/* Status */}
      <Card>
        <SectionTitle title="Connection Status" />
        <ConnectionStatus data={connectionInfo} />
      </Card>

      {/* Actions */}
      {canConfigureIntegration && (
        <Card>
          <SectionTitle title="Integration Actions" />
          <ConnectionActions />
        </Card>
      )}

      {/* Channels */}
      <Card>
        <SectionTitle title="Integration Channels" />
        <IntegrationChannels data={channels} />
      </Card>

      {/* Logs */}
      <Card>
        <SectionTitle title="Integration Message Logs" />
        <IntegrationLogsTable data={integrationLogs} />
      </Card>

      {/* Config */}
      {canConfigureIntegration && (
        <Card>
          <SectionTitle title="Integration Configuration" />
          <IntegrationConfigForm />
        </Card>
      )}

    </PageContainer>
  );
}
