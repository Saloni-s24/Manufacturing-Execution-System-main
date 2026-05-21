import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProductionOrdersPage from "./modules/production/pages/ProductionOrdersPage";
import WorkCenters from "./modules/workcenter/pages/WorkCenters";
import QualityPage from "./modules/quality/pages/QualityPage";
import MaterialPage from "./modules/material/pages/MaterialPage";
import ConfirmationPage from "./modules/confirmation/pages/ConfirmationPage";
import OEEPage from "./modules/oee/pages/OEEPage";
import IntegrationPage from "./modules/integration/pages/IntegrationPage";
import OperatorDashboard from "./modules/operator/pages/OperatorDashboard";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { PERMISSIONS } from "./constants/permissions";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <MainLayout>
            <ProtectedRoute permission={PERMISSIONS.DASHBOARD_READ}>
              <OperatorDashboard />
            </ProtectedRoute>
          </MainLayout>
        }
      />
        <Route
          path="/production-orders"
          element={
            <MainLayout>
              <ProtectedRoute permission={PERMISSIONS.PRODUCTION_ORDERS_READ}>
                <ProductionOrdersPage />
              </ProtectedRoute>
            </MainLayout>
          }
        />

        <Route
          path="/work-centers"
          element={
            <MainLayout>
              <ProtectedRoute permission={PERMISSIONS.WORK_CENTERS_READ}>
                <WorkCenters />
              </ProtectedRoute>
            </MainLayout>
          }
        />

        <Route
          path="/quality-page"
          element={
            <MainLayout>
              <ProtectedRoute permission={PERMISSIONS.QUALITY_INSPECTION_READ}>
                <QualityPage />
              </ProtectedRoute>
            </MainLayout>
          }
        />

        <Route
          path="/material-goods"
          element={
            <MainLayout>
              <ProtectedRoute permission={PERMISSIONS.MATERIAL_READ}>
                <MaterialPage />
              </ProtectedRoute>
            </MainLayout>
          }
        />

        <Route
          path="/confirmation"
          element={
            <MainLayout>
              <ProtectedRoute permission={PERMISSIONS.CONFIRMATION_READ}>
                <ConfirmationPage />
              </ProtectedRoute>
            </MainLayout>
          }
        />

        <Route
          path="/oee"
          element={
            <MainLayout>
              <ProtectedRoute permission={PERMISSIONS.OEE_READ}>
                <OEEPage />
              </ProtectedRoute>
            </MainLayout>
          }
        />

        <Route
          path="/sap-integration"
          element={
            <MainLayout>
              <ProtectedRoute permission={PERMISSIONS.SAP_INTEGRATION_READ}>
                <IntegrationPage />
              </ProtectedRoute>
            </MainLayout>
          }
        />
    </Routes>
  );
}

export default App;
