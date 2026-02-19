import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(130deg, #f7f7f5 0%, #e5f4fb 45%, #f4f6f5 100%)",
          padding: "64px",
          color: "#2a3c46"
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#4aa7c8"
          }}
        >
          Anisotropic Labs
        </div>
        <div style={{ fontSize: 80, lineHeight: 1.04, maxWidth: 900 }}>Physics-accurate simulation for the real world.</div>
        <div style={{ fontSize: 32, opacity: 0.86 }}>Computational Fluid Dynamics + Spatial AR Research</div>
      </div>
    ),
    {
      ...size
    }
  );
}
