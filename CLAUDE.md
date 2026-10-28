# Dashboard — Home HQ (inspired by home-dashboard.wesbos.workers.dev)

A family home dashboard built with Next.js. Designed to run on a wall-mounted tablet/TV. All data is demo/mock data unless otherwise specified.

## Visual Design

- **Background**: off-white/cream (`#F2EDE4` or similar)
- **Sidebar**: ~60px dark/black vertical nav with icon + short label per section
- **Typography**: bold editorial sans-serif (e.g. `Inter` or `DM Sans` at heavy weights, large sizes)
- **Family member colors**: each person has a distinct accent color used consistently across all sections
  - Wes → blue
  - Claudia → pink/magenta
  - Buzzsaw → green/teal
  - Skidmark → yellow/orange
- Lots of white space, high contrast cards with subtle borders
- Yellow highlight for urgent/next-up items

## Sections (sidebar nav)

### Today (home/default view)
Top row:
- **Clock** — large bold time (hh:mm AM/PM)
- **Date** — day of week + date
- **Weather** — current temp, condition, hi/lo, hourly forecast bar (scrollable, next 8h with temp + rain icon), AI-generated advisory ("Rain from 4 PM. Pack a rain jacket for soccer.")
- **Family location** — avatar initials per person, location label ("Home", "At the office", "ETA 12 min")

Middle:
- **Next Up card** — yellow card with large countdown in minutes to next event. Shows: person name, event name, time range, location, "Leave in X min" button
- **On This Day** — photo widget with overlay text ("7 years ago today · Banff, AB")

Bottom:
- **Per-person schedule columns** — one column per family member, color-coded header, list of today's events with time
- **Chores summary widget** — circular progress rings per person (e.g. "1/2"), label below
- **Shopping widget** — item count + first few items
- **Home status widget** — lights on count, lock status, inside temperature

### Calendar
- Day / 3-Day / Week / Month toggle
- Prev/Next nav + "Today" button
- Events color-coded by family member
- Current time red line indicator
- Events show "Leave by HH:MM" when travel time is relevant
- All-day events bar at top

### Chores / Tasks
- Time-of-day tabs: Morning / After School / Evening
- Overall progress counter (X/Y done) with progress bar
- One column per family member + "Anyone" column
- Each task card: emoji icon, task name, star/point value, overdue badge
- Completed tasks shown struck-through
- Weekly completion tracker at bottom of each column (M T W T F S S dots)
- Person header shows name, total points, ratio (X of Y)

### Shopping
- Title: "Groceries · X to get"
- Filter tabs by store (All, Freshco, Costco)
- Items grouped by category (Produce, Bakery, Meat & Fish, Dairy & Eggs, etc.)
- Each item: checkbox, name, optional note, optional store tag, quantity −/+ controls
- Right panel: "Add an item" input + "Usuals" quick-add grid (frequently bought items, with "On List" badge when already added)

### Home (smart home)
Top summary cards:
- Lights (count + "on in X rooms")
- Security ("Locked / All doors + garage")
- Climate (current temp + target)
- Media ("Playing · Kitchen speaker")

Scene buttons: Morning, Dinner, Movie, Away, Goodnight

Room sections (Kitchen, Living Room, Entry + Garage, etc.):
- Light cards with dimmer % (highlighted yellow when on)
- Blind/shade cards (highlighted blue when open/partial)
- Lock cards with "hold to unlock" interaction

Right panel:
- Thermostat widget: large temp, −/+ controls, set-to, inside temp, humidity, Heat/Cool/Auto/Off mode selector
- Security cameras: snapshot thumbnails with timestamp ("5s ago"), room label
- Now playing: album art, song + artist, room, play/pause

### Agents (AI usage)
- Title: "Agents · AI Plans · Usage Limits" + "Updated X min ago" + refresh button
- One card per AI service (Claude, Codex/ChatGPT, Cursor, Gemini, Copilot)
- Per card: service name, plan tier, status badge (OPERATIONAL / DEGRADED)
- Usage bars with % + reset countdown + pace indicator ("X% over pace", "X% under pace")
- Tokens today + API cost today + sparkline trend
- Alert banner for degraded services or near-limit warnings
- "All Agents" summary card: total tokens, total API cost today, stacked bar chart last 7 days (color per agent)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Data**: mock/static data to start; structure so real APIs can be plugged in later
- **State**: React state / context (keep it simple)
- **No auth** needed — this is a local wall display

## Project Structure

```
app/
  layout.tsx          # sidebar nav + root layout
  page.tsx            # Today view
  calendar/page.tsx
  chores/page.tsx
  shopping/page.tsx
  home/page.tsx
  agents/page.tsx
components/
  sidebar/
  today/
  calendar/
  chores/
  shopping/
  home/
  agents/
  ui/                 # shared: Card, Badge, ProgressBar, Avatar, etc.
lib/
  mock-data/          # all demo data as typed TS objects
  types.ts
```

## Conventions

- Mobile-first is NOT a priority — this is a widescreen wall display (1280px+)
- Prefer CSS Grid for dashboard layouts
- Keep components small and focused
- No external UI libraries — build everything custom
- Tailwind utility classes only, no CSS modules
