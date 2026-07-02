'use client';

import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-700 px-8 py-16 text-center text-white shadow-2xl sm:px-12 lg:px-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <MessageCircle size={16} />
            Let&apos;s Connect
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something Great
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Whether you have a project, a job opportunity, or just want to say
            hello, I&apos;d love to hear from you. Let&apos;s create something
            amazing together.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-semibold text-slate-900 transition hover:scale-105"
            >
              <Mail size={18} />
              Contact Me
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
