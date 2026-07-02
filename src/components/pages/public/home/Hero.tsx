'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDocker,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';

export default function Hero() {
  return (
    <section className="w-full bg-slate-50 py-0">
      <div className="mx-auto max-w-[95%] px-6 pt-8 pb-16 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-3">
          {/* ================= LEFT ================= */}
          <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <MapPin size={16} />
              Kathmandu, Nepal
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Full Stack
              <span className="block text-blue-600">MERN Developer</span>
            </h1>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              I build modern, scalable and responsive web applications using
              React, Next.js, Node.js, Express, MongoDB and TypeScript with a
              focus on clean architecture and performance.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Mail size={18} />
                Hire Me
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

            <div className="flex justify-center gap-4 pt-2 lg:justify-start">
              <Link
                href="https://github.com"
                className="rounded-full bg-white p-3 shadow transition hover:-translate-y-1 hover:text-blue-600"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href="https://linkedin.com"
                className="rounded-full bg-white p-3 shadow transition hover:-translate-y-1 hover:text-blue-600"
              >
                <FaLinkedin size={22} />
              </Link>
            </div>
          </div>

          {/* ================= CENTER ================= */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={380}
                height={380}
                priority
                unoptimized
                className="relative h-72 w-72 rounded-full border-8 border-white object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px]"
              />
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="order-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
                Tech Stack
              </h2>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <FaReact className="text-3xl text-sky-500" />
                  <span className="font-medium">React</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <SiNextdotjs className="text-3xl" />
                  <span className="font-medium">Next.js</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <SiTypescript className="text-3xl text-blue-600" />
                  <span className="font-medium">TypeScript</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <SiTailwindcss className="text-3xl text-cyan-500" />
                  <span className="font-medium">Tailwind</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <FaNodeJs className="text-3xl text-green-600" />
                  <span className="font-medium">Node.js</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <SiMongodb className="text-3xl text-green-600" />
                  <span className="font-medium">MongoDB</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <FaDocker className="text-3xl text-blue-500" />
                  <span className="font-medium">Docker</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-blue-600 p-3 text-white">
                  <ArrowRight className="text-2xl" />
                  <span className="font-medium">Explore</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t pt-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                  <p className="text-sm text-slate-500">Projects</p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">10+</h3>
                  <p className="text-sm text-slate-500">Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
