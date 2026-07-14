import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata } from "@/lib/seo/buildMetadata";
import { personSchema } from "@/lib/seo/schema";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "About",
    description:
      "Learn more about Bikram Modi, a Full Stack MERN Developer specializing in React, Next.js, Node.js, Express, MongoDB, Docker, Kubernetes, and AI-powered web applications.",
    path: "/about",
  });
}

export default function AboutPage() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <div>
        <h1>About</h1>
      </div>
    </>
  );
}