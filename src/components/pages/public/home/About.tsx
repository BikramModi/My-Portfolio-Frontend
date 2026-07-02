'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Download,
  UserRound,
  Code2,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-white py-3">
      <div className="mx-auto max-w-[95%] px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <UserRound size={16} />
            About Me
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Passionate Full Stack Developer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I enjoy building fast, scalable, and user-friendly web applications
            using modern technologies. My focus is writing clean code, solving
            real-world problems, and continuously improving my skills.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <Code2 className="text-blue-600" size={36} />

            <h3 className="mt-5 text-xl font-bold">Development</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Building responsive, modern web applications with React, Next.js,
              Node.js, Express, MongoDB and TypeScript.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <Briefcase className="text-blue-600" size={36} />

            <h3 className="mt-5 text-xl font-bold">Projects</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Experienced in authentication, REST APIs, dashboards, payment
              integration, and full-stack MERN applications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <GraduationCap className="text-blue-600" size={36} />

            <h3 className="mt-5 text-xl font-bold">Learning</h3>

            <p className="mt-3 leading-7 text-slate-600">
              Constantly learning new technologies including Docker, CI/CD,
              cloud deployment, and software architecture.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Me
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <Download size={18} />
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
