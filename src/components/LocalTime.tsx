"use client";

import { useSyncExternalStore } from "react";

// The time in New Delhi, refreshed every half minute. Renders nothing on the
// server so the hydrated text never mismatches.
function subscribe(cb: () => void) {
  const id = setInterval(cb, 30_000);
  return () => clearInterval(id);
}

function now() {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  })
    .format(new Date())
    .toLowerCase();
}

export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, now, () => null);
  if (!time) return null;
  return <>It’s {time} in New Delhi right now.</>;
}
