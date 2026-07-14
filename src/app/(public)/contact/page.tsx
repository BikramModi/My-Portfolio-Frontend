import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo/buildMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Contact",
    description:
      "Get in touch with Bikram Modi for freelance projects, full-time opportunities, collaborations, or technical discussions about Full Stack MERN development, Next.js, AI, Docker, and Kubernetes.",
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
