// src/modules/oee/data/oeeData.js

export const kpis = {
  oee: 78,
  availability: 88,
  performance: 82,
  quality: 96,
  downtime: 95,
  mttr: 18
};

export const downtimeEvents = [
  {
    machine: "CNC-01",
    start: "08:30",
    duration: 25,
    category: "Breakdown",
    reason: "Hydraulic issue",
    status: "Resolved"
  },
  {
    machine: "CNC-02",
    start: "10:15",
    duration: 40,
    category: "Material Shortage",
    reason: "Material unavailable",
    status: "Ongoing"
  }
];

export const trendData = [
  { day: "01", value: 71 },
  { day: "02", value: 74 },
  { day: "03", value: 69 },
  { day: "04", value: 81 },
  { day: "05", value: 79 }
];