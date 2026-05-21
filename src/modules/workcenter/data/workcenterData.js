// src/modules/workcenter/data/workcenterData.js

export const workCenters = [
  {
    id: "CNC-01",
    description: "CNC Machining 1",
    category: "Machine",
    capacity: 8,
    utilization: 72,
    currentOrder: "PO-100423",
    operator: "Rajesh S.",
    status: "Running",
  },

  {
    id: "CNC-02",
    description: "CNC Machining 2",
    category: "Machine",
    capacity: 8,
    utilization: 0,
    currentOrder: null,
    operator: null,
    status: "Down",
  },

  {
    id: "CNC-03",
    description: "CNC Machining 3",
    category: "Machine",
    capacity: 8,
    utilization: 48,
    currentOrder: "PO-100431",
    operator: "Amit K.",
    status: "Running (Late)",
  },

  {
    id: "CNC-04",
    description: "CNC Machining 4",
    category: "Machine",
    capacity: 8,
    utilization: 95,
    currentOrder: "PO-100444",
    operator: "Sonal P.",
    status: "Running",
  },

  {
    id: "WELD-01",
    description: "Welding Station 1",
    category: "Labour",
    capacity: 8,
    utilization: 60,
    currentOrder: "PO-100450",
    operator: "Dev R.",
    status: "Running",
  },

  {
    id: "WELD-02",
    description: "Welding Station 2",
    category: "Labour",
    capacity: 8,
    utilization: 0,
    currentOrder: null,
    operator: null,
    status: "Idle",
  },
];

export const ganttData = [
  {
    wc: "CNC-01",
    orders: [
      {
        id: "PO-100423 - Gear Assy X7",
        start: 8,
        end: 13,
        status: "Running",
      },
    ],
  },

  {
    wc: "CNC-02",
    orders: [
      {
        id: "Maintenance",
        start: 8,
        end: 10,
        status: "Maintenance",
      },
      {
        id: "PO-100460 - Valve Body",
        start: 10.5,
        end: 14.8,
        status: "Running",
      },
    ],
  },

  {
    wc: "CNC-03",
    orders: [
      {
        id: "PO-100431 - Motor Housing",
        start: 8,
        end: 12,
        status: "Delayed",
      },
    ],
  },

  {
    wc: "CNC-04",
    orders: [
      {
        id: "PO-100444 - Control Panel CP5",
        start: 8,
        end: 15.8,
        status: "Near Done",
      },
    ],
  },

  {
    wc: "WELD-01",
    orders: [
      {
        id: "Setup",
        start: 8,
        end: 8.8,
        status: "Setup",
      },
      {
        id: "PO-100450 - Bracket Assy",
        start: 9.2,
        end: 15.5,
        status: "Running",
      },
    ],
  },
];