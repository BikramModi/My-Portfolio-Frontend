/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site-config";

export const runtime = "edge";

export const alt = "Bikram Modi | Full Stack MERN Developer";

export const size = {
  width: 1200,
  height: 630,
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
          background: "#0f172a",
          color: "white",
          padding: 60,
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "65%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#60a5fa",
              marginBottom: 20,
            }}
          >
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
            }}
          >
            Bikram Modi
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 34,
              color: "#cbd5e1",
            }}
          >
            Full Stack MERN Developer
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              color: "#94a3b8",
            }}
          >
            React • Next.js • Node.js • Express • MongoDB • Docker • Kubernetes
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 22,
              color: "#60a5fa",
            }}
          >
            Building scalable modern web applications.
          </div>
        </div>

        {/* Right */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={new URL(siteConfig.image, siteConfig.url).toString()}
          width={260}
          height={260}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "6px solid #2563eb",
          }}
        />
      </div>
    ),
    size
  );
}