
export const workCenters = [
  {
    plant: "1000",
    workCenter: "LINE-02",
    shiftName: "Morning Shift",
    shiftDate: "5/21/2026",
    shiftStart: "06:00",
    shiftEnd: "14:00",
    breakDuration: 30,
    netAvailableTime: 450,
    capacityCategory: "001",
    shiftModelId: "SM-A1",
  },

  {
    plant: "1000",
    workCenter: "CNC-05",
    shiftName: "Morning Shift",
    shiftDate: "5/21/2026",
    shiftStart: "06:00",
    shiftEnd: "14:00",
    breakDuration: 30,
    netAvailableTime: 450,
    capacityCategory: "001",
    shiftModelId: "SM-A1",
  },

  {
    plant: "1000",
    workCenter: "WELD-02",
    shiftName: "Morning Shift",
    shiftDate: "5/21/2026",
    shiftStart: "06:00",
    shiftEnd: "14:00",
    breakDuration: 30,
    netAvailableTime: 450,
    capacityCategory: "001",
    shiftModelId: "SM-A1",
  },
];


export const ganttData = [
  {
    wc: "LINE-02",
    plant: "1000",
    shiftName: "Morning Shift",

    orders: [
      {
        id: "PO-20481",
        operation: "0010",
        start: 6,
        end: 9,
        plannedStart: "5/21/2026",
        plannedFinish: "5/26/2026",
        reqCapacity: 32,
        confirmedCap: 28,
        targetUnits: 500,
        actualUnits: 420,
        status: "Running",
      },

      {
        id: "PO-20475",
        operation: "0010",
        start: 10,
        end: 13,
        plannedStart: "5/21/2026",
        plannedFinish: "5/26/2026",
        reqCapacity: 18,
        confirmedCap: 15,
        targetUnits: 320,
        actualUnits: 250,
        status: "Near Done",
      },
    ],
  },

  {
    wc: "CNC-05",
    plant: "1000",
    shiftName: "Morning Shift",

    orders: [
      {
        id: "PO-20479",
        operation: "0010",
        start: 7,
        end: 11,
        plannedStart: "5/21/2026",
        plannedFinish: "5/26/2026",
        reqCapacity: 24,
        confirmedCap: 20,
        targetUnits: 300,
        actualUnits: 240,
        status: "Delayed",
      },

      {
        id: "PO-20472",
        operation: "0010",
        start: 11,
        end: 14,
        plannedStart: "5/21/2026",
        plannedFinish: "5/26/2026",
        reqCapacity: 20,
        confirmedCap: 17,
        targetUnits: 260,
        actualUnits: 210,
        status: "Running",
      },
    ],
  },

  {
    wc: "WELD-02",
    plant: "1000",
    shiftName: "Morning Shift",

    orders: [
      {
        id: "PO-20477",
        operation: "0010",
        start: 6,
        end: 12,
        plannedStart: "5/21/2026",
        plannedFinish: "5/26/2026",
        reqCapacity: 16,
        confirmedCap: 14,
        targetUnits: 200,
        actualUnits: 170,
        status: "Setup",
      },
    ],
  },
];