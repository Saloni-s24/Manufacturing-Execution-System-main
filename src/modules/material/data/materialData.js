// src/modules/material/data/materialData.js

export const components = [
  {
    material: "100-110",
    description: "Steel Bar 50mm",
    requiredQty: 50,
    issuedQty: 50,
    uom: "KG",
    batch: "B240",
    sloc: "SL-01",
  },

  {
    material: "100-120",
    description: "Cutting Oil",
    requiredQty: 5,
    issuedQty: 5,
    uom: "L",
    batch: "B241",
    sloc: "SL-01",
  },

  {
    material: "100-300",
    description: "Fastener M8",
    requiredQty: 100,
    issuedQty: 98,
    uom: "EA",
    batch: "B242",
    sloc: "SL-02",
  },
];

export const materialHistory = [
  {
    doc: "5000012771",
    year: 2026,
    type: "101",
    material: "MAT-2200",
    qty: 200,
    uom: "EA",
    order: "PO-100415",
    user: "Rajesh S.",
    date: "28.04 10:30",
    status: "Posted",
  },

  {
    doc: "5000012768",
    year: 2026,
    type: "261",
    material: "100-110",
    qty: 50,
    uom: "KG",
    order: "PO-100423",
    user: "Rajesh S.",
    date: "28.04 08:05",
    status: "Posted",
  },

  {
    doc: "5000012765",
    year: 2026,
    type: "261",
    material: "100-300",
    qty: 50,
    uom: "KG",
    order: "PO-100444",
    user: "Sonal P.",
    date: "27.04 15:20",
    status: "Posted",
  },
];