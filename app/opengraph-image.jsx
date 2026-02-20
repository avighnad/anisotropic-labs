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
          background: "linear-gradient(150deg, #fff6ec 0%, #ffe2c2 100%)",
          padding: "64px",
          color: "#1f1b16"
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.19em",
            textTransform: "uppercase",
            color: "#195571"
          }}
        >
          Anisotropic Labs
        </div>

        <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 920 }}>Physics-accurate simulation for the real world.</div>

        <div
          style={{
            fontSize: 28,
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            color: "#ecf8ff",
            background: "#0e0e10",
            border: "1px solid rgba(103,214,255,0.45)",
            padding: "12px 16px"
          }}
        >
          Computational Fluid Dynamics + Spatial AR Research
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
