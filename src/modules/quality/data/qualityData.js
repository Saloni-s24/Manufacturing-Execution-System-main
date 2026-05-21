// src/modules/quality/data/qualityData.js
export const inspectionLots = [
  {
    lot: "QLOT-88201",
    order: "PO-100423",
    material: "MAT-7001",
    qty: 50,
    result: "PASS",
    status: "Released",
  },

  {
    lot: "QLOT-88202",
    order: "PO-100431",
    material: "MAT-3020",
    qty: 20,
    result: "FAIL",
    status: "Rejected",
  },

  {
    lot: "QLOT-88203",
    order: "PO-100444",
    material: "MAT-5510",
    qty: 49,
    result: "PASS",
    status: "Released",
  },

  {
    lot: "QLOT-88204",
    order: "PO-100450",
    material: "MAT-8802",
    qty: 30,
    result: "PENDING",
    status: "In Progress",
  },
];

export const ncReports = [
  {
    qn: "QN-20000456",
    order: "PO-100431",
    defect: "Surface Scratch",
    qty: 5,
    severity: "Major",
    status: "Open",
  },

  {
    qn: "QN-20000457",
    order: "PO-100431",
    defect: "Dimension OOT",
    qty: 3,
    severity: "Critical",
    status: "Open",
  },

  {
    qn: "QN-20000450",
    order: "PO-100415",
    defect: "Burr on Edge",
    qty: 2,
    severity: "Minor",
    status: "Closed",
  },
];