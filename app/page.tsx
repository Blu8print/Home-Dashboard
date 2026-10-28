import { family, todayEvents, nextUpEvent } from "@/lib/mock-data";
import type { MemberId } from "@/lib/types";

function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

const memberColors: Record<MemberId, string> = {
  wes: "bg-blue-500",
  claudia: "bg-pink-500",
  buzzsaw: "bg-emerald-500",
  skidmark: "bg-amber-400",
};

const memberBorderColors: Record<MemberId, string> = {
  wes: "border-blue-500",
  claudia: "border-pink-500",
  buzzsaw: "border-emerald-500",
  skidmark: "border-amber-400",
};

const memberTextColors: Record<MemberId, string> = {
  wes: "text-blue-600",
  claudia: "text-pink-600",
  buzzsaw: "text-emerald-600",
  skidmark: "text-amber-500",
};

export default function TodayPage() {
  const memberEvents = (id: MemberId) =>
    todayEvents.filter((e) => !e.allDay && e.members.includes(id));

  return (
    <div className="p-6 space-y-6 min-h-full">
      {/* Top row */}
      <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-start">
        {/* Clock + date */}
        <div>
          <div className="flex items-start gap-2">
            <span className="text-[80px] font-black leading-none tracking-tighter">3:18</span>
            <span className="text-2xl font-bold text-black/40 mt-3">PM</span>
          </div>
          <div className="text-sm font-bold tracking-widest text-black/50 uppercase mt-1">
            Wednesday <span className="text-black">October 28</span>
          </div>
        </div>

        {/* Weather */}
        <div className="pt-2">
          <div className="flex items-center gap-3">
            <span className="text-5xl font-black">15°</span>
            <div>
              <div className="text-sm font-bold tracking-wider text-black/50">OVERCAST</div>
              <div className="text-xs text-black/40">H 17° L 8°</div>
            </div>
          </div>
          <p className="text-sm text-black/60 mt-1 italic">
            Rain from 4 PM. Pack a rain jacket for soccer.
          </p>
          <div className="flex gap-4 mt-3 overflow-x-auto pb-1">
            {[
              { label: "NOW", temp: "15°" },
              { label: "4P", temp: "14°" },
              { label: "5P", temp: "13°" },
              { label: "6P", temp: "12°" },
              { label: "7P", temp: "12°" },
              { label: "8P", temp: "11°" },
              { label: "9P", temp: "10°" },
            ].map((s) => (
              <div key={s.label} className="text-center shrink-0">
                <div className="text-[10px] text-black/40 font-bold">{s.label}</div>
                <div className="text-sm font-bold">{s.temp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Family locations */}
        <div className="space-y-2 pt-2">
          {family.map((m) => (
            <div key={m.id} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full ${memberColors[m.id]} flex items-center justify-center text-white text-xs font-bold`}>
                {m.initial}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide">{m.name}</div>
                <div className={`text-xs ${m.eta ? "text-blue-500 font-bold" : "text-black/40"}`}>
                  {m.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Up + On This Day */}
      <div className="grid grid-cols-2 gap-4">
        {/* Next Up */}
        <div className="bg-amber-400 rounded-2xl p-5">
          <div className="text-xs font-black tracking-widest text-black/60 mb-2">
            NEXT UP · {nextUpEvent.members[0].toUpperCase()}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-4xl font-black leading-tight">{nextUpEvent.title}</div>
              <div className="text-sm text-black/60 mt-1">
                {formatTime(nextUpEvent.startTime)} – {formatTime(nextUpEvent.endTime)}
                {nextUpEvent.location && ` · ${nextUpEvent.location}`}
              </div>
            </div>
            <div className="text-right shrink-0 ml-4">
              <div className="text-7xl font-black leading-none">27</div>
              <div className="text-sm font-bold tracking-wider">MIN</div>
            </div>
          </div>
          <button className="mt-4 bg-black text-white text-xs font-bold py-2 px-4 rounded-full tracking-wider">
            LEAVE IN 15 MIN
          </button>
        </div>

        {/* On This Day */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-400 min-h-[180px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-xs font-bold tracking-widest opacity-70">ON THIS DAY · 7 YEARS AGO TODAY</div>
            <div className="text-lg font-black">Banff, AB</div>
          </div>
        </div>
      </div>

      {/* Per-person schedules */}
      <div className="grid grid-cols-4 gap-3">
        {family.map((m) => {
          const events = memberEvents(m.id);
          return (
            <div key={m.id} className={`border-t-4 ${memberBorderColors[m.id]} pt-2`}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-6 h-6 rounded-full ${memberColors[m.id]} flex items-center justify-center text-white text-[10px] font-bold`}>
                  {m.initial}
                </div>
                <span className={`text-xs font-black tracking-widest ${memberTextColors[m.id]}`}>
                  {m.name.toUpperCase()}
                </span>
              </div>
              <div className="space-y-1.5">
                {events.map((e) => (
                  <div key={e.id} className="bg-white/60 rounded-lg p-2">
                    <div className="text-xs text-black/40 font-bold">{formatTime(e.startTime)}</div>
                    <div className="text-sm font-bold truncate">{e.title}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom widgets */}
      <div className="grid grid-cols-3 gap-3">
        {/* Chores */}
        <div className="bg-white/50 rounded-2xl p-4">
          <div className="text-xs font-black tracking-widest text-black/40 mb-3">CHORES · AFTER SCHOOL</div>
          <div className="flex gap-4">
            {family.map((m) => (
              <div key={m.id} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 rounded-full border-4 ${memberBorderColors[m.id]} flex items-center justify-center text-xs font-black`}>
                  1/2
                </div>
                <span className="text-[10px] text-black/40 font-bold">{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping */}
        <div className="bg-white/50 rounded-2xl p-4">
          <div className="text-xs font-black tracking-widest text-black/40 mb-1">SHOPPING</div>
          <div className="text-4xl font-black">21</div>
          <div className="text-xs text-black/40">items to get</div>
          <div className="text-xs text-black/60 mt-2">Dish soap · Paper towels · Granola bars</div>
        </div>

        {/* Home */}
        <div className="bg-white/50 rounded-2xl p-4">
          <div className="text-xs font-black tracking-widest text-black/40 mb-3">HOME</div>
          <div className="space-y-1.5 text-sm">
            <div className="flex items-center gap-2">
              <span>💡</span>
              <span className="font-bold">5</span>
              <span className="text-black/40">lights on</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span className="text-black/40">All locked</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌡️</span>
              <span className="font-bold">20.5°</span>
              <span className="text-black/40">inside</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
