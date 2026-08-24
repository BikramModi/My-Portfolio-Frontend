"use client";

import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications across frontend, backend, APIs, databases, authentication, and deployment.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "Exploring practical AI systems including RAG, LLM applications, agentic workflows, memory, and tool execution.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Designing structured APIs and backend services with reliability, maintainability, security, and scalability in mind.",
  },
  {
    icon: Workflow,
    title: "System Thinking",
    description:
      "Breaking complex applications into clear components, services, workflows, and maintainable engineering boundaries.",
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Redis",
  "REST APIs",
  "OpenAI",
  "RAG",
  "Docker",
  "Jest",
  "Git",
  "Tailwind CSS",
];

const journey = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Started by building web applications and learning how modern frontend and backend technologies work together.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Full-Stack Engineering",
    description:
      "Moved toward complete application architecture, authentication, databases, APIs, deployment, testing, and production workflows.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "AI Systems",
    description:
      "Expanded into AI-powered applications, RAG, LLM integrations, agentic systems, memory, tools, and observability.",
    icon: BrainCircuit,
  },
];

const focusAreas = [
  "Agentic AI",
  "RAG Systems",
  "LLM Applications",
  "Backend Architecture",
  "AI Memory",
  "Observability",
];

export default function AboutPageContent() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Introduction */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles className="h-4 w-4" />
                About Me
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                I build software that turns{" "}
                <span className="text-blue-600">ideas into products.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                I&apos;m a software developer focused on building modern
                full-stack applications and exploring the engineering
                challenges behind AI-powered systems.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                My work combines frontend development, backend engineering,
                databases, APIs, AI integrations, testing, and deployment
                into complete applications rather than isolated features.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  View My Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Developer card */}
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-2 shadow-2xl shadow-slate-950/10">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="mt-8 font-mono text-sm leading-8">
                    <p className="text-slate-500">
                      <span className="text-blue-400">const</span>{" "}
                      developer = {"{"}
                    </p>

                    <p className="pl-5 text-slate-300">
                      name:{" "}
                      <span className="text-green-400">
                        &quot;Bikram Modi&quot;
                      </span>
                      ,
                    </p>

                    <p className="pl-5 text-slate-300">
                      role:{" "}
                      <span className="text-green-400">
                        &quot;Full-Stack Developer&quot;
                      </span>
                      ,
                    </p>

                    <p className="pl-5 text-slate-300">
                      focus:{" "}
                      <span className="text-green-400">
                        &quot;AI Systems&quot;
                      </span>
                      ,
                    </p>

                    <p className="pl-5 text-slate-300">
                      mindset:{" "}
                      <span className="text-green-400">
                        &quot;Build. Learn. Improve.&quot;
                      </span>
                    </p>

                    <p className="text-slate-500">{"}"}</p>

                    <p className="mt-5">
                      <span className="text-blue-400">developer</span>.
                      <span className="text-yellow-300">build</span>
                      <span className="text-slate-400">();</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Rocket className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Current Direction
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      AI + Full Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING APPROACH
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            How I Think
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Engineering beyond just writing code.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Good software is more than getting a feature to work. I care
            about how systems are structured, how they behave under failure,
            and how easily they can evolve.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGIES
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Technology
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Tools I use to bring ideas to life.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                I enjoy working across the stack, choosing technologies based
                on the problem rather than forcing every project into the
                same architecture.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">
                <Database className="h-4 w-4 text-blue-400" />
                Full-stack + AI
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex min-h-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-3 text-center text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            My Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            From building websites to building systems.
          </h2>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-slate-200 sm:block"
          />

          <div className="space-y-8">
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative grid gap-5 sm:grid-cols-[48px_1fr] sm:gap-7"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-black tracking-[0.2em] text-blue-600">
                        {item.number}
                      </span>

                      <h3 className="text-xl font-bold text-slate-950">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT FOCUS
      ========================================================= */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Current Focus
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Going deeper into intelligent systems.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400">
                I&apos;m currently expanding my work beyond traditional web
                applications into AI systems that can reason through tasks,
                use tools, maintain context, retrieve knowledge, and provide
                observable workflows.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-center text-sm font-semibold text-slate-200 transition-colors hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Rocket className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Whether you&apos;re working on a web application, an AI-powered
            product, or an interesting engineering problem, I&apos;d love to
            hear about it.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}