import type { SmartDevice, Camera, NowPlaying, Thermostat } from "@/lib/types";

export const thermostat: Thermostat = {
  current: 20.5,
  setTo: 21.5,
  mode: "heat",
  humidity: 42,
};

export const nowPlaying: NowPlaying = {
  title: "Harvest Moon",
  artist: "Neil Young",
  room: "Kitchen",
  playing: true,
};

export const cameras: Camera[] = [
  { id: "cam1", name: "Front Porch", secondsAgo: 5 },
  { id: "cam2", name: "Driveway", secondsAgo: 5 },
];

export const devices: SmartDevice[] = [
  // Kitchen
  { id: "d1", name: "Pendants", room: "Kitchen", type: "light", state: { on: true, brightness: 80 } },
  { id: "d2", name: "Under Cabinet", room: "Kitchen", type: "light", state: { on: true, brightness: 55 } },
  { id: "d3", name: "Island", room: "Kitchen", type: "light", state: { on: false, brightness: 0 } },
  { id: "d4", name: "Window Shade", room: "Kitchen", type: "blind", state: { open: true, percent: 100 } },
  // Living Room
  { id: "d5", name: "Floor Lamp", room: "Living Room", type: "light", state: { on: true, brightness: 45 } },
  { id: "d6", name: "Ceiling", room: "Living Room", type: "light", state: { on: false, brightness: 0 } },
  { id: "d7", name: "Blinds", room: "Living Room", type: "blind", state: { open: true, percent: 60 } },
  { id: "d8", name: "Mantel", room: "Living Room", type: "light", state: { on: false, brightness: 0 } },
  // Entry + Garage
  { id: "d9", name: "Front Door", room: "Entry + Garage", type: "lock", state: { locked: true } },
  { id: "d10", name: "Porch", room: "Entry + Garage", type: "light", state: { on: true, brightness: 100 } },
  { id: "d11", name: "Garage", room: "Entry + Garage", type: "garage", state: { locked: true } },
  { id: "d12", name: "Side Door", room: "Entry + Garage", type: "lock", state: { locked: true } },
];

export const scenes = ["Morning", "Dinner", "Movie", "Away", "Goodnight"] as const;
export type SceneName = (typeof scenes)[number];
