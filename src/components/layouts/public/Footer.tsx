'use client';

import Link from 'next/link';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-slate-950 text-white">
      <div className="mx-auto w-full px-6 py-14 sm:px-8 lg:px-10 xl:px-12">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-3xl font-bold tracking-tight">
              Bikram Modi
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Full Stack Developer passionate about building modern, scalable,
              and user-friendly web applications using React, Next.js, Node.js,
              Express, MongoDB, and TypeScript.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition duration-300 hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Connect
            </h3>

            <div className="mb-6 flex items-center gap-3 text-gray-300">
              <Mail size={18} />

              <a
                href="mailto:bikrammodi132@gmail.com"
                className="transition hover:text-blue-400"
              >
                bikrammodi132@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/BikramModi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-gray-700 p-3 transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/in/bikrammodi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-gray-700 p-3 transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaLinkedin size={20} />
              </Link>

              <button
                type="button"
                aria-label="X (Coming Soon)"
                onClick={() => toast.info('Coming Soon!')}
                className="rounded-full border border-gray-700 p-3 transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaXTwitter size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bikram Modi. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="flex items-center gap-2 rounded-full border border-gray-700 px-5 py-2 text-sm transition duration-300 hover:border-blue-500 hover:bg-blue-600"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}