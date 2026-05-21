// src/modules/integration/data/integrationData.js

export const connectionInfo = {
  host: "https://sap-btp-dev.apcrest.com",
  client: "100",
  user: "MES_RFC_USER",
  status: "Connected",
  latency: 128
};

export const channels = [
  {
    module: "PP",
    iflow: "MES_PP_SYNC",
    endpoint: "/api/pp/orders",
    status: "Active"
  },
  {
    module: "QM",
    iflow: "MES_QM_SYNC",
    endpoint: "/api/qm/inspection",
    status: "Active"
  },
  {
    module: "MM",
    iflow: "MES_MM_SYNC",
    endpoint: "/api/mm/goodsmovement",
    status: "Warning"
  }
];

export const integrationLogs = [
  {
    time: "10:22:14",
    method: "POST",
    endpoint: "/api/pp/confirmation",
    status: "SUCCESS",
    document: "CNF-100212"
  },
  {
    time: "10:31:02",
    method: "GET",
    endpoint: "/api/qm/inspectionlots",
    status: "ERROR",
    document: "-"
  }
];