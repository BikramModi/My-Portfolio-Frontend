import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata } from "@/lib/seo/buildMetadata";
import { projectsSchema } from "@/lib/seo/schema";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Projects",
    description:
      "Explore Full Stack MERN, Next.js, AI, Docker, and Kubernetes projects developed by Bikram Modi. View real-world web applications, source code, and live demos.",
    path: "/projects",
  });
}

export default function ProjectsPage() {
  return (
    <>
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema),
        }}
      />

      <div>
        <h1>Projects</h1>
      </div>
    </>
  );
}