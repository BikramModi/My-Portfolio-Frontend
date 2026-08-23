"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  FolderGit2,
  GitBranch,
  Layers3,
  Sparkles,
} from "lucide-react";

type Category = "All" | "Full Stack" | "AI" | "Frontend" | "Backend";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categories: Exclude<Category, "All">[];
  tech: string[];
  featured?: boolean;
  github?: {
    frontend?: string;
    backend?: string;
  };
  demo?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "WanderWise",
    subtitle: "AI-Powered Travel Planning Platform",
    description:
      "A full-stack travel planning platform that helps users discover destinations, create personalized itineraries, manage budgets, explore hotels, and organize complete trips.",
    image: "/images/wanderwise.png",
    categories: ["Full Stack", "AI", "Frontend", "Backend"],
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "Tailwind CSS",
      "Docker",
    ],
    featured: true,
    github: {
      frontend:
        "https://github.com/myfirstapp111/Wander-Wise-Frontend1",
      backend: "https://github.com/myfirstapp111/Wander-Wise",
    },
    demo: "https://wanderwisefront.netlify.app/",
  },

  {
    id: 2,
    title: "MERN E-Commerce",
    subtitle: "Production-Ready E-Commerce Platform",
    description:
      "A complete e-commerce platform with authentication, product management, shopping cart, Stripe payments, order management, administration, and a responsive shopping experience.",
    image: "/images/eshop.png",
    categories: ["Full Stack", "Frontend", "Backend"],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
      "Redux Toolkit",
      "Cloudinary",
    ],
    github: {
      frontend: "https://github.com/BikramModi/E-ComFrontend",
      backend: "https://github.com/BikramModi/E-ComBackend",
    },
    demo: "https://e-com-frontend-vert.vercel.app/",
  },

  {
    id: 3,
    title: "AI ChatGPT Clone",
    subtitle: "Conversational AI Web Application",
    description:
      "A ChatGPT-inspired AI assistant featuring authentication, persistent conversations, chat history, markdown rendering, AI responses, and a modern responsive interface.",
    image: "/images/chatgpt.png",
    categories: ["Full Stack", "AI", "Frontend", "Backend"],
    tech: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
      "JWT",
    ],
    featured: true,
    github: {
      frontend: "https://github.com/BikramModi/ChatgptCloneFrontend",
      backend: "https://github.com/BikramModi/ChatgptClone",
    },
    demo: "https://chatgpt-clone-frontend-murex.vercel.app/",
  },

  {
    id: 4,
    title: "Agentic AI System",
    subtitle: "Tool-Using AI Agent Architecture",
    description:
      "An agentic AI architecture focused on planning, tool execution, memory, observability, RAG integration, lifecycle tracing, and reliable multi-step AI workflows.",
    image: "/images/chatgpt.png",
    categories: ["AI", "Backend", "Full Stack"],
    tech: [
      "Node.js",
      "Express",
      "LLM",
      "RAG",
      "Redis",
      "MongoDB",
      "Jest",
      "Docker",
    ],
    github: {
      backend: "https://github.com/BikramModi",
    },
  },
];

const filters: Category[] = [
  "All",
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
];

export default function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter),
        );

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <FolderGit2 className="h-4 w-4" />
              My Projects
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Building ideas into{" "}
              <span className="text-blue-600">real products.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A collection of full-stack applications, AI-powered systems,
              and modern web experiences built with scalable technologies.
            </p>

            <div
              className="mt-8 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
              role="group"
              aria-label="Filter projects"
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="projects-heading"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Selected Work
            </p>

            <h2
              id="projects-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              Things I&apos;ve built
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Layers3 className="h-4 w-4" />
            <span>
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </span>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Code2 className="mx-auto h-10 w-10 text-slate-400" />

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try selecting another category.
            </p>
          </div>
        )}
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Have an idea worth building?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            I&apos;m always interested in building useful products, solving
            interesting engineering problems, and working on ambitious ideas.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Let&apos;s Work Together
            <ArrowUpRight className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const githubUrl =
    project.github?.frontend ||
    project.github?.backend ||
    "https://github.com/BikramModi";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
        project.featured ? "border-blue-100" : "border-slate-200"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
            {String(project.id).padStart(2, "0")}
          </span>

          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
              <Sparkles className="h-3.5 w-3.5" />
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            {project.categories[0]}
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm font-semibold text-blue-600">
          {project.subtitle}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-[15px]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </Link>

          {project.demo ? (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-colors hover:bg-blue-700"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          ) : (
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
            >
              Discuss
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}