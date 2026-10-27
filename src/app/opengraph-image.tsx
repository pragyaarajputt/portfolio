import { ImageResponse } from "next/og";

export const alt = "Pragya Rajput, full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview in the site's night-sky palette: the name and the role.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "linear-gradient(180deg, #0b0520 0%, #3a1678 60%, #7a2d5c 100%)",
          color: "#FFFFFF",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 132, fontWeight: 800, letterSpacing: -5, lineHeight: 0.9 }}>Pragya Rajput</div>
        <div style={{ fontSize: 38, marginTop: 28, color: "#D5C5DC" }}>
          Full-stack developer: React, Next.js, Node.js, FastAPI and LLM features
        </div>
      </div>
    ),
    size,
  );
}
