"use client";

import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Same container as Header & Hero */}
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Code2 size={18} />
            Skills
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Technologies I Use
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            I build modern full-stack web applications using the latest
            frontend, backend, database, and DevOps technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:shadow-lg"
            >
              <div className="text-4xl">{skill.icon}</div>

              <h3 className="mt-4 text-sm font-semibold text-slate-800">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Skills
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}