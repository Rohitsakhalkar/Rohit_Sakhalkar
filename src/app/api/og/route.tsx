import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          backgroundColor: "#080b10",
          color: "#f4f4f5",
          border: "1px solid #27272a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#34d399",
            fontFamily: "monospace",
          }}
        >
          ROHIT.EXE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 62,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Rohit Sakhalkar
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: "#a1a1aa",
          }}
        >
          Python Developer · Backend Engineering · Automation
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
