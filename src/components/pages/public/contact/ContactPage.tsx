"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  GitBranch,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "bikrammodi132@gmail.com",
    href: "mailto:bikrammodi132@gmail.com",
    description:
      "Best for project inquiries, collaborations, and professional opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "LinkedIn",
    value: "linkedin.com/in/bikrammodi",
    href: "https://www.linkedin.com/in/bikrammodi",
    description:
      "Let's connect and discuss opportunities, ideas, and technology.",
  },
  {
    icon: GitBranch,
    title: "GitHub",
    value: "github.com/BikramModi",
    href: "https://github.com/BikramModi",
    description:
      "Explore my projects, experiments, and development work.",
  },
];

const interests = [
  "Full-Stack Development",
  "AI Applications",
  "Agentic AI",
  "Backend Systems",
  "RAG & LLMs",
  "Web Applications",
];

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Static form for now.
    // Connect this to your backend/email service later.
    setSubmitted(true);
  }

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
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <MessageSquare className="h-4 w-4" />
              Get In Touch
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-blue-600">meaningful.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Have an idea, a project, or an interesting engineering problem?
              Send me a message and let&apos;s start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}
          <aside className="space-y-6">
            {/* Availability */}
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Availability
                  </p>

                  <p className="mt-1 text-lg font-bold">
                    Open to opportunities
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                I&apos;m interested in meaningful projects involving
                full-stack development, AI systems, backend engineering, and
                modern web applications.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-400">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                Available for conversations
              </div>
            </div>

            {/* Contact Methods */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="text-lg font-bold text-slate-950">
                Contact information
              </h2>

              <div className="mt-6 space-y-5">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  const isEmail = method.href.startsWith("mailto:");

                  return (
                    <Link
                      key={method.title}
                      href={method.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      className="group flex gap-4 rounded-2xl border border-transparent p-2 transition hover:border-slate-200 hover:bg-slate-50"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {method.title}
                        </p>

                        <p className="mt-1 truncate text-sm font-bold text-slate-900">
                          {method.value}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {method.description}
                        </p>
                      </div>

                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-blue-600" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Location / Response */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <MapPin className="h-5 w-5 text-blue-600" />

                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  Nepal
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <Clock3 className="h-5 w-5 text-blue-600" />

                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Response
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  Usually within 24–48h
                </p>
              </div>
            </div>
          </aside>

          {/* =====================================================
              FORM
          ===================================================== */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {!submitted ? (
              <>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                    Start a Conversation
                  </p>

                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                    Tell me about your project.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    Share a little about what you&apos;re building, what you
                    need help with, or simply say hello.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-slate-800"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-800"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What would you like to discuss?"
                      className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="project"
                      className="text-sm font-semibold text-slate-800"
                    >
                      What are you looking for?
                    </label>

                    <select
                      id="project"
                      name="project"
                      defaultValue=""
                      className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      <option value="full-stack">
                        Full-Stack Development
                      </option>

                      <option value="ai">AI / LLM Application</option>

                      <option value="backend">
                        Backend Development
                      </option>

                      <option value="consultation">
                        Technical Discussion
                      </option>

                      <option value="other">Something else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your idea, project, or question..."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    This form is currently a frontend-only interface. Email
                    delivery can be connected to your backend later.
                  </p>
                </form>
              </>
            ) : (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-slate-950">
                  Message ready!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  The contact form is currently running in static mode. Once
                  connected to your backend, this form can send the message
                  directly to your inbox.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 px-6 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    Send Another
                  </button>

                  <Link
                    href="/projects"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    View Projects
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERESTS
      ========================================================= */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Code2 className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Things I&apos;m excited to work on
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              If your project touches any of these areas, I&apos;d be happy to
              hear about it.
            </p>
          </div>

          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto max-w-4xl px-5 py-12 text-center sm:px-8 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have something interesting in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400">
            Start with an idea. We can figure out the technology and the
            implementation together.
          </p>

          <a
            href="mailto:bikrammodi132@gmail.com"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Email Me
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}