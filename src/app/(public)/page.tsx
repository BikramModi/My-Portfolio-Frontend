import type { Metadata } from "next";
import Script from "next/script";

import { buildMetadata } from "@/lib/seo/buildMetadata";
import { personSchema, websiteSchema } from "@/lib/seo/schema";

import {
  Hero,
  Skills,
  Experience,
  ProjectsPreview,
  ContactCTA,
  About,
} from "@/components/pages/public/home";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "AI Full Stack MERN Developer",
    description:
      "Bikram Modi is a Full Stack MERN Developer specializing in React, Next.js, Node.js, Express, MongoDB, Docker, Kubernetes, and AI-powered web applications.",
    path: "/",
  });
}

export default function HomePage() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <ProjectsPreview />

      <ContactCTA />
    </>
  );
}