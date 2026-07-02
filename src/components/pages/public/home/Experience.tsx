'use client';

import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack MERN Developer',
    company: 'Freelance',
    period: '2024 - Present',
    location: 'Remote',
    description:
      'Building modern web applications using React, Next.js, Node.js, Express, MongoDB and TypeScript. Focused on authentication, REST APIs, dashboards and responsive UI.',
  },
  {
    role: 'Frontend Developer',
    company: 'Personal Projects',
    period: '2023 - 2024',
    location: 'Nepal',
    description:
      'Developed responsive websites and reusable React components while learning modern frontend architecture and performance optimization.',
  },
  {
    role: 'Computer Science Student',
    company: 'Academic Journey',
    period: '2021 - Present',
    location: 'Nepal',
    description:
      'Learning software engineering, databases, networking, operating systems and full stack development through academic and personal projects.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-2 sm:py-2 lg:py-3">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Briefcase size={16} />
            Experience
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            My Journey
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            My learning path and experience in building modern, scalable web
            applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 top-8 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-blue-600 md:left-1/2" />

                {/* Card */}
                <div className="ml-14 w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:ml-0 md:w-[45%]">
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-blue-600">
                    {item.company}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {item.period}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
