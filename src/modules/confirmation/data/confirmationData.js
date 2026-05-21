// src/modules/confirmation/data/confirmationData.js

export const productionOrders = [
  {
    confNo: "1000220",
    order: "PO-100423",
    operation: "0020",
    workCenter: "CNC-01",
    targetQty: 250,
    confirmedQty: 180,
    scrapQty: 5,
  },

  {
    confNo: "1000222",
    order: "PO-100431",
    operation: "0020",
    workCenter: "CNC-03",
    targetQty: 100,
    confirmedQty: 40,
    scrapQty: 7,
  },

  {
    confNo: "1000223",
    order: "PO-100445",
    operation: "0020",
    workCenter: "CNC-04",
    targetQty: 50,
    confirmedQty: 49,
    scrapQty: 1,
  },

  {
    confNo: "1000224",
    order: "PO-100450",
    operation: "0010",
    workCenter: "WELD-01",
    targetQty: 400,
    confirmedQty: 60,
    scrapQty: 10,
  },

  {
    confNo: "1000221",
    order: "PO-100415",
    operation: "0020",
    workCenter: "LATHE-01",
    targetQty: 200,
    confirmedQty: 200,
    scrapQty: 0,
  },

  {
    confNo: "1000225",
    order: "PO-100460",
    operation: "0010",
    workCenter: "MILL-02",
    targetQty: 80,
    confirmedQty: 0,
    scrapQty: 0,
  },
];

export const confirmationHistory = [
  {
    confNo: "1000221",
    order: "PO-100415",
    operation: "0040",
    yield: 200,
    scrap: 0,
    machineHours: 6.0,
    type: "Final",
    postedDate: "27.04 14:00",
  },

  {
    confNo: "1000220",
    order: "PO-100423",
    operation: "0020",
    yield: 100,
    scrap: 1,
    machineHours: 2.1,
    type: "Partial",
    postedDate: "28.04 11:00",
  },
];