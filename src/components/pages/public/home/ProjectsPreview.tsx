"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FolderGit2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A modern portfolio built with Next.js, TypeScript and Tailwind CSS.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "MERN E-Commerce",
    description:
      "Complete e-commerce platform with authentication, Stripe and admin dashboard.",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Chat Application",
    description:
      "Real-time messaging application using Socket.IO and MongoDB.",
    image: "/projects/chat.png",
    tech: ["Socket.IO", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-24"
    >
      {/* Same container as Header */}
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <FolderGit2 size={18} />
            Featured Projects
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            My Latest <span className="text-blue-600">Projects</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A selection of projects demonstrating my experience in building
            scalable, modern and responsive web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    <FolderGit2 size={18} />
                    GitHub
                  </Link>

                  <Link
                    href={project.demo}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-white transition hover:bg-blue-600"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}