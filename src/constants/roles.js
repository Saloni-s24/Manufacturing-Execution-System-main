export const ROLES = {
  OPERATOR: "MES_OPERATOR",
  SUPERVISOR: "MES_SUPERVISOR",
  QUALITY: "MES_QUALITY",
  PLANNER: "MES_PLANNER",
  ADMIN: "MES_ADMIN",
};

export const ROLE_OPTIONS = [
  {
    value: ROLES.OPERATOR,
    label: "MES Operator",
    sapEquivalent: "SAP_PP_CONF",
  },
  {
    value: ROLES.SUPERVISOR,
    label: "MES Supervisor",
    sapEquivalent: "SAP_PP_SUPER",
  },
  {
    value: ROLES.QUALITY,
    label: "MES Quality",
    sapEquivalent: "SAP_QM_INSP",
  },
  {
    value: ROLES.PLANNER,
    label: "MES Planner",
    sapEquivalent: "SAP_PP_PLAN",
  },
  {
    value: ROLES.ADMIN,
    label: "MES Admin",
    sapEquivalent: "SAP_ADMIN",
  },
];
