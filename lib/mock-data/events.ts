import type { CalendarEvent } from "@/lib/types";

export const todayEvents: CalendarEvent[] = [
  {
    id: "e1",
    title: "Parent–teacher call",
    startTime: "17:00",
    endTime: "17:30",
    members: ["wes", "claudia"],
  },
  {
    id: "e2",
    title: "Dinner at Nonna's",
    startTime: "18:30",
    endTime: "19:30",
    members: ["wes", "buzzsaw", "skidmark"],
    location: "Nonna's",
    leaveBy: "18:10",
  },
  {
    id: "e3",
    title: "Drive Buzzsaw to soccer",
    startTime: "16:05",
    endTime: "16:30",
    members: ["claudia"],
  },
  {
    id: "e4",
    title: "Pick up Skidmark",
    startTime: "16:25",
    endTime: "16:45",
    members: ["claudia"],
  },
  {
    id: "e5",
    title: "Soccer practice",
    startTime: "16:30",
    endTime: "18:00",
    members: ["buzzsaw"],
    location: "Soccer field",
    leaveBy: "16:10",
  },
  {
    id: "e6",
    title: "Piano lesson",
    startTime: "15:45",
    endTime: "16:30",
    members: ["skidmark"],
    location: "Ms. Park's Studio",
    leaveBy: "15:30",
    travelMinutes: 15,
  },
  {
    id: "e7",
    title: "Bath + books",
    startTime: "20:00",
    endTime: "20:30",
    members: ["skidmark"],
  },
  {
    id: "e8",
    title: "Lunch with Sam",
    startTime: "13:00",
    endTime: "14:00",
    members: ["wes"],
    location: "Downtown",
  },
  {
    id: "e9",
    title: "Garbage + recycling night",
    startTime: "00:00",
    endTime: "23:59",
    allDay: true,
    members: ["wes", "claudia", "buzzsaw", "skidmark"],
  },
  {
    id: "e10",
    title: "Pajama Day at school",
    startTime: "00:00",
    endTime: "23:59",
    allDay: true,
    members: ["skidmark"],
  },
];

// Next upcoming event (used for the "Next Up" card)
export const nextUpEvent = todayEvents.find((e) => e.id === "e6")!;
