import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bikram Modi Portfolio",

    short_name: "Bikram",

    description:
      "Portfolio of Bikram Modi, Full Stack MERN Developer.",

    start_url: "/",

    display: "standalone",

    background_color: "#0f172a",

    theme_color: "#2563eb",

    icons: [
      {
        src: "/images/profile.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/profile.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}