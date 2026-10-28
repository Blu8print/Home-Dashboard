import type { AgentService } from "@/lib/types";

export const agents: AgentService[] = [
  {
    id: "claude",
    name: "Claude",
    plan: "Max 20×",
    status: "operational",
    color: "#E8845C",
    limits: [
      { label: "Session", used: 62, total: 100, resetsIn: "2h 14m", pace: "over", pacePercent: 7 },
      { label: "Weekly · All Models", used: 41, total: 100, resetsIn: "3d 6h", pace: "under", pacePercent: 13 },
    ],
    tokensToday: 3_100_000,
    apiCostToday: 21.40,
    sparkline: [18, 22, 15, 28, 19, 25, 21],
  },
  {
    id: "codex",
    name: "Codex",
    plan: "ChatGPT Pro",
    status: "operational",
    alert: "Near the session limit",
    color: "#10B981",
    limits: [
      { label: "Session", used: 88, total: 100, resetsIn: "38m", pace: "on", pacePercent: 0 },
      { label: "Weekly", used: 57, total: 100, resetsIn: "5d 2h", pace: "over", pacePercent: 30 },
    ],
    tokensToday: 4_600_000,
    apiCostToday: 17.90,
    sparkline: [12, 30, 25, 40, 35, 42, 46],
  },
  {
    id: "cursor",
    name: "Cursor",
    plan: "Pro+",
    status: "operational",
    color: "#1C1C1C",
    limits: [
      { label: "Included Usage", used: 76, total: 100, resetsIn: "12d 0h", pace: "over", pacePercent: 16 },
      { label: "On-Demand", used: 16, total: 100, resetsIn: "12d 0h", pace: "under", pacePercent: 44 },
    ],
    tokensToday: 1_800_000,
    apiCostToday: 6.30,
    sparkline: [8, 10, 12, 9, 14, 11, 18],
  },
  {
    id: "gemini",
    name: "Gemini",
    plan: "AI Ultra",
    status: "operational",
    color: "#3B82F6",
    limits: [
      { label: "Requests · Daily", used: 16, total: 100, resetsIn: "8h 42m", pace: "under", pacePercent: 48 },
      { label: "Pro Model · Daily", used: 52, total: 100, resetsIn: "8h 42m", pace: "under", pacePercent: 12 },
    ],
    tokensToday: 900_000,
    apiCostToday: null,
    sparkline: [5, 8, 6, 10, 7, 9, 9],
  },
  {
    id: "copilot",
    name: "Copilot",
    plan: "Pro+",
    status: "degraded",
    alert: "Elevated errors on coding agent",
    color: "#8B5CF6",
    limits: [
      { label: "Premium Requests", used: 75, total: 100, resetsIn: "12d 0h", pace: "over", pacePercent: 15 },
      { label: "Coding Agent", used: 38, total: 100, resetsIn: "12d 0h", pace: "under", pacePercent: 22 },
    ],
    tokensToday: 1_200_000,
    apiCostToday: null,
    sparkline: [20, 18, 25, 15, 10, 12, 12],
  },
];

export const allAgentsSummary = {
  totalTokens: 64_000_000,
  totalApiCostToday: 46,
  // Last 7 days stacked data per agent (Thu–Today)
  weeklyData: [
    { day: "THU", claude: 18, codex: 12, cursor: 8, gemini: 5, copilot: 20 },
    { day: "FRI", claude: 22, codex: 30, cursor: 10, gemini: 8, copilot: 18 },
    { day: "SAT", claude: 15, codex: 25, cursor: 12, gemini: 6, copilot: 25 },
    { day: "SUN", claude: 28, codex: 40, cursor: 9, gemini: 10, copilot: 15 },
    { day: "MON", claude: 19, codex: 35, cursor: 14, gemini: 7, copilot: 10 },
    { day: "TUE", claude: 25, codex: 42, cursor: 11, gemini: 9, copilot: 12 },
    { day: "TODAY", claude: 21, codex: 46, cursor: 18, gemini: 9, copilot: 12 },
  ],
};
