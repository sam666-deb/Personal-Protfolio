---
title: "Building CommuteCast: merging live transit data with weather"
date: "2026-07-20"
excerpt: "How and why I built a full-stack app that combines Melbourne's PTV timetable data with live weather, and what I learned wiring a React + Express app end-to-end."
tags: [full-stack, react, project]
---

Every morning in Melbourne I'd open two apps — one for the next train, tram, or bus, and one for the weather — before deciding whether to leave five minutes earlier or grab an umbrella. **CommuteCast** started as an itch to merge those two into one screen.

## What it does

CommuteCast is a full-stack commute companion that combines live **PTV Timetable API** data (train, tram, bus, V/Line) with **weather** conditions, so a single glance tells you when to actually leave the house. It's installable as a PWA, supports light/dark mode, and is deployed live at [commute-cast-six.vercel.app](https://commute-cast-six.vercel.app).

## Tech stack

- **Frontend:** React 18 + Vite
- **Backend:** Node.js + Express, signing and proxying PTV API requests
- **Deployment:** Vercel, with CI running on every push

## The interesting part: signing PTV requests

The PTV Timetable API doesn't just take an API key in a header — every request needs an **HMAC-SHA1 signature** computed from the request path and a dev ID, appended as a query parameter. That signing has to happen server-side (you don't want your private key sitting in a frontend bundle), which is what pushed this from "just a React app" into a proper full-stack project with its own Express backend.

That one requirement ended up shaping a lot of the architecture: request caching to avoid hammering the API and hitting rate limits, a clean separation between "data fetching and signing" (backend) and "presentation" (frontend), and error states for when a service is temporarily down — buses don't stop running just because an API does.

## What I'd do differently

If I rebuilt this today, I'd add push notifications for delays and a proper offline cache for the PWA — right now it degrades gracefully but doesn't function fully offline. Both are on the roadmap.

If you commute in Melbourne, [give it a try](https://commute-cast-six.vercel.app) — and if you're curious about the PTV signing implementation, the source is on [GitHub](https://github.com/sam666-deb/CommuteCast).
