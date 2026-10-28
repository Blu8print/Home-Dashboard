// ── Family ───────────────────────────────────────────────────────────────────

export type MemberId = "wes" | "claudia" | "buzzsaw" | "skidmark";

export interface FamilyMember {
  id: MemberId;
  name: string;
  color: string; // tailwind bg class
  textColor: string; // tailwind text class
  initial: string;
  location: string;
  eta?: string; // e.g. "12 min"
}

// ── Events / Calendar ─────────────────────────────────────────────────────────

export interface CalendarEvent {
  id: string;
  title: string;
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
  allDay?: boolean;
  members: MemberId[];
  location?: string;
  leaveBy?: string; // "HH:MM"
  travelMinutes?: number;
}

// ── Chores ────────────────────────────────────────────────────────────────────

export type ChoreTime = "morning" | "after-school" | "evening";

export interface Chore {
  id: string;
  title: string;
  assignee: MemberId | "anyone";
  time: ChoreTime;
  points: number;
  done: boolean;
  overdue?: boolean;
  emoji?: string;
  weeklyCompletion?: boolean[]; // Mon–Sun
}

// ── Shopping ──────────────────────────────────────────────────────────────────

export type Store = "freshco" | "costco";

export interface ShoppingItem {
  id: string;
  name: string;
  note?: string;
  quantity: number;
  category: string;
  store?: Store;
  checked: boolean;
}

export interface UsualItem {
  id: string;
  name: string;
  category: string;
  onList: boolean;
}

// ── Home / Smart Home ─────────────────────────────────────────────────────────

export type LightState = { on: boolean; brightness: number }; // brightness 0-100
export type BlindState = { open: boolean; percent: number };
export type LockState = { locked: boolean };

export interface SmartDevice {
  id: string;
  name: string;
  room: string;
  type: "light" | "blind" | "lock" | "garage";
  state: LightState | BlindState | LockState;
}

export interface Camera {
  id: string;
  name: string;
  snapshotUrl?: string;
  secondsAgo: number;
}

export interface NowPlaying {
  title: string;
  artist: string;
  room: string;
  playing: boolean;
}

export interface Thermostat {
  current: number;
  setTo: number;
  mode: "heat" | "cool" | "auto" | "off";
  humidity: number;
}

// ── Agents ────────────────────────────────────────────────────────────────────

export type AgentStatus = "operational" | "degraded" | "outage";

export interface AgentLimit {
  label: string;
  used: number;
  total: number;
  resetsIn: string;
  pace: "over" | "under" | "on";
  pacePercent: number;
}

export interface AgentService {
  id: string;
  name: string;
  plan: string;
  status: AgentStatus;
  alert?: string;
  limits: AgentLimit[];
  tokensToday: number;
  apiCostToday: number | null; // null = included in plan
  sparkline: number[]; // last 7 data points
  color: string; // hex for chart
}
