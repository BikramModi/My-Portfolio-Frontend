"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FolderGit2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Developer Portfolio",
    description: "Modern portfolio built with Next.js, TypeScript and Tailwind CSS.",
    image: "/images/profile.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "MERN E-Commerce",
    description: "Full-stack e-commerce application with authentication and Stripe.",
    image: "/images/profile.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application using Socket.IO and MongoDB.",
    image: "/images/profile.jpg",
    tech: ["Socket.IO", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-2 sm:py-2 lg:py-3"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <FolderGit2 size={16} />
            Featured Projects
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            My Latest <span className="text-blue-600">Work</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A few projects showcasing my experience in building modern,
            responsive, and scalable web applications.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  0{index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href={project.github}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 transition hover:border-blue-600 hover:text-blue-600"
                  >
                    <FaGithub />
                    GitHub
                  </Link>

                  <Link
                    href={project.demo}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink size={18} />
                    Live
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
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}