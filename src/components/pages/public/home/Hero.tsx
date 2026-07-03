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

import { toast } from 'react-toastify';

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        min-h-[calc(100vh-80px)]
        flex
        items-center
      "
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-300/20 blur-[100px] sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] lg:blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-cyan-300/20 blur-[90px] sm:h-72 sm:w-72 lg:h-[450px] lg:w-[450px] lg:blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div
          className="
            grid
            items-center
            gap-10
            lg:gap-12
            xl:gap-16
            lg:grid-cols-3
          "
        >
          {/* ================= LEFT ================= */}

          <div className="order-2 space-y-5 text-center lg:order-1 lg:text-left">
            {/* Location */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
              <MapPin size={16} className="text-blue-600" />

              <span className="text-sm font-medium text-slate-700 sm:text-base">
                Biratnagar, Nepal
              </span>
            </div>

            {/* Heading */}

            <div>
              <h1
                className="
                  text-4xl
                  font-black
                  leading-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Full Stack
                <span
                  className="
                    mt-2
                    block
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  MERN Developer
                </span>
              </h1>
            </div>

            {/* Description */}

            <p
              className="
                mx-auto
                max-w-xl
                text-base
                leading-8
                text-slate-600
                sm:text-lg
                lg:mx-0
              "
            >
              I build modern scalable web applications with React, Next.js,
              TypeScript, Node.js and MongoDB focused on performance,
              maintainability and clean architecture.
            </p>

            {/* Buttons */}

            <div
              className="
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              <Link
                href="/contact"
                onClick={() => toast.info('Coming soon!')}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-blue-700
                  sm:w-auto
                "
              >
                <Mail size={18} />
                Hire Me
              </Link>

              <Link
                href="/Bikram_Modi_MERN_Developer_Resume.pdf"
                download
                onClick={() => toast.success('Resume download started')}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:w-auto
                "
              >
                <Download size={18} />
                Resume
              </Link>
            </div>

            {/* Social Icons */}

            <div
              className="
                flex
                justify-center
                gap-4
                lg:justify-start
              "
            >
              <Link
                href="https://github.com/BikramModi"
                target="_blank"
                className="
                  rounded-full
                  bg-white
                  p-3
                  shadow-lg
                  transition
                  hover:-translate-y-2
                  hover:text-blue-600
                "
              >
                <FaGithub className="text-xl" />
              </Link>

              <Link
                href="https://linkedin.com/in/bikrammodi"
                target="_blank"
                className="
                  rounded-full
                  bg-white
                  p-3
                  shadow-lg
                  transition
                  hover:-translate-y-2
                  hover:text-blue-600
                "
              >
                <FaLinkedin className="text-xl" />
              </Link>
            </div>
          </div>

          {/* ================= CENTER ================= */}

          <div
            className="
              order-1
              relative
              flex
              items-center
              justify-center
              py-6
              lg:order-2
            "
          >
            {/* Background Glow */}

            <div
              className="
                absolute
                h-72
                w-72
                rounded-full
                bg-blue-500/20
                blur-[80px]
                sm:h-96
                sm:w-96
                lg:h-[520px]
                lg:w-[520px]
                lg:blur-[110px]
              "
            />

            {/* Outer Rotating Ring */}

            <div
              className="
                ring-spin
                absolute
                h-64
                w-64
                sm:h-80
                sm:w-80
                md:h-[360px]
                md:w-[360px]
                lg:h-[440px]
                lg:w-[440px]
                rounded-full
              "
            >
              <div className="absolute inset-0 rounded-full border border-blue-300/30" />
            </div>

            {/* Electric Beam */}

            <div
              className="
                beam-spin
                absolute
                h-64
                w-64
                sm:h-80
                sm:w-80
                md:h-[360px]
                md:w-[360px]
                lg:h-[440px]
                lg:w-[440px]
                rounded-full
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-6
                  w-6
                  -translate-x-1/2
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_40px_12px_rgba(59,130,246,.7)]
                  sm:h-8
                  sm:w-8
                  lg:h-10
                  lg:w-10
                "
              />
            </div>

            {/* Floating Profile */}

            <div className="floating relative">
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  blur-3xl
                  opacity-30
                "
              />

              {/* Floating Particles */}

              <div
                className="
                  orbit
                  absolute
                  h-3
                  w-3
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_20px_#3b82f6]
                  sm:h-4
                  sm:w-4
                "
              />

              <div
                className="
                  orbit2
                  absolute
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_#22d3ee]
                  sm:h-3
                  sm:w-3
                "
              />

              <div
                className="
                  orbit3
                  absolute
                  h-2
                  w-2
                  rounded-full
                  bg-sky-300
                  shadow-[0_0_15px_#38bdf8]
                "
              />

              {/* Glass Circle */}

              <div
                className="
                  relative
                  flex
                  h-60
                  w-60
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-xl
                  shadow-[0_20px_70px_rgba(37,99,235,.18)]

                  sm:h-72
                  sm:w-72

                  md:h-80
                  md:w-80

                  lg:h-[390px]
                  lg:w-[390px]
                "
              >
                {/* Animated Lightning Border */}
                <div
                  className="
    relative
    h-52
    w-52

    sm:h-64
    sm:w-64

    md:h-72
    md:w-72

    lg:h-[360px]
    lg:w-[360px]
  "
                >
                  {/* Rotating Electric Ring */}
                  <div
                    className="
      absolute
      inset-0
      rounded-full
      p-[4px]
      lightning-ring
    "
                  >
                    <div className="h-full w-full rounded-full bg-transparent" />
                  </div>

                  {/* Blue Glow */}
                  <div
                    className="
      absolute
      inset-0
      rounded-full
      bg-blue-500/30
      blur-xl
      animate-pulse
    "
                  />

                  {/* Image */}
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={380}
                    height={380}
                    priority
                    className="
      relative
      z-10
      h-full
      w-full
      rounded-full
      object-cover
      border-2
      border-slate-100/40
      shadow-[0_0_50px_rgba(59,130,246,.6)]
    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
              order-3
              relative
              w-full
              max-w-xl
              mx-auto
              lg:max-w-none
            "
          >
            {/* Background Glow */}

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-2xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/70
                bg-white/80
                p-5
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                backdrop-blur-xl

                sm:p-6
                lg:p-8
              "
            >
              <h2 className="mb-6 text-center text-xl font-bold text-slate-900 sm:text-2xl">
                Tech Stack
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* React */}

                <div className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <FaReact className="text-3xl text-sky-500 transition-transform duration-500 group-hover:rotate-180 sm:text-4xl" />

                  <span className="text-sm font-semibold sm:text-base">
                    React
                  </span>
                </div>

                {/* Next */}

                <div className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <SiNextdotjs className="text-3xl transition-transform duration-500 group-hover:scale-110 sm:text-4xl" />

                  <span className="text-sm font-semibold sm:text-base">
                    Next.js
                  </span>
                </div>

                {/* TypeScript */}

                <div className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <SiTypescript className="text-3xl text-blue-600 transition-transform duration-500 group-hover:rotate-12 sm:text-4xl" />

                  <span className="text-sm font-semibold sm:text-base">
                    TypeScript
                  </span>
                </div>

                {/* Tailwind */}

                <div className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <SiTailwindcss className="text-3xl text-cyan-500 transition-transform duration-500 group-hover:scale-125 sm:text-4xl" />

                  <span className="text-sm font-semibold sm:text-base">
                    Tailwind
                  </span>
                </div>

                {/* Node */}

                <div className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <FaNodeJs className="text-3xl text-green-600 transition-transform duration-500 group-hover:rotate-12 sm:text-4xl" />

                  <span className="text-sm font-semibold sm:text-base">
                    Node.js
                  </span>
                </div>

                {/* MongoDB */}

                <div className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <SiMongodb className="text-3xl text-green-600 transition-transform duration-500 group-hover:scale-125 sm:text-4xl" />

                  <span className="text-sm font-semibold sm:text-base">
                    MongoDB
                  </span>
                </div>

                {/* Docker */}

                <div className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                  <FaDocker className="text-3xl text-blue-500 transition-transform duration-500 group-hover:rotate-12 sm:text-4xl" />

                  <span className="text-sm font-semibold sm:text-base">
                    Docker
                  </span>
                </div>

                {/* Explore */}

                <div className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <ArrowRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />

                  <span className="text-sm sm:text-base">Explore</span>
                </div>
              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

              {/* Stats */}

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 p-4 text-center transition duration-300 hover:bg-blue-50">
                  <h3 className="text-3xl font-black text-blue-600 sm:text-4xl">
                    20+
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 sm:text-base">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-center transition duration-300 hover:bg-blue-50">
                  <h3 className="text-3xl font-black text-blue-600 sm:text-4xl">
                    10+
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 sm:text-base">
                    Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
