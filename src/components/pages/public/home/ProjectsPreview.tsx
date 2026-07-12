'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'WanderWise - Travel Planning Platform',
    description:
      'A full-stack travel planning platform that helps travelers discover destinations, generate personalized itineraries, manage travel budgets, explore hotels, and organize complete trips. Built with a modern scalable architecture using Next.js, Express, MongoDB, and AI integration.',
    image: '/images/wanderwise.png',
    tech: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'OpenAI',
      'Tailwind CSS',
      'Docker',
    ],
    github: {
      frontend: 'https://github.com/myfirstapp111/Wander-Wise-Frontend1',
      backend: 'https://github.com/myfirstapp111/Wander-Wise',
    },
    demo: 'https://wanderwisefront.netlify.app/',
  },
  {
    title: 'MERN E-Commerce Platform',
    description:
      'A production-ready full-stack e-commerce platform featuring secure authentication, Stripe payment integration, shopping cart, product catalog, order management, admin dashboard, and responsive user experience built with the MERN stack.',
    image: '/images/eshop.png',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe',
      'JWT',
      'Redux Toolkit',
      'Cloudinary',
    ],
    github: {
      frontend: 'https://github.com/BikramModi/E-ComFrontend',
      backend: 'https://github.com/BikramModi/E-ComBackend',
    },
    demo: 'https://e-com-frontend-vert.vercel.app/',
  },
  {
    title: 'AI ChatGPT Clone',
    description:
      'A ChatGPT-inspired AI assistant built with Next.js and Express featuring secure authentication, real-time conversations, markdown rendering, chat history, streaming AI responses, and a modern responsive interface powered by large language models.',
    image: '/images/chatgpt.png',
    tech: [
      'Next.js',
      'TypeScript',
      'Express',
      'MongoDB',
      'OpenAI API',
      'Tailwind CSS',
      'JWT',
    ],
    github: {
      frontend: 'https://github.com/BikramModi/ChatgptCloneFrontend',
      backend: 'https://github.com/BikramModi/ChatgptClone',
    },
    demo: 'https://chatgpt-clone-frontend-murex.vercel.app/',
  },
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="bg-slate-50 py-2 sm:py-2 lg:py-3">
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
              {/* Image */}
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

              {/* Content */}
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

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <Link
                    href={project.github.frontend}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 text-sm transition hover:border-blue-600 hover:text-blue-600"
                  >
                    <FaGithub />
                    Frontend
                  </Link>

                  <Link
                    href={project.github.backend}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 text-sm transition hover:border-blue-600 hover:text-blue-600"
                  >
                    <FaGithub />
                    Backend
                  </Link>

                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink size={16} />
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
