'use client';

import Link from 'next/link';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-slate-950 text-white">
      <div className="mx-auto w-full  px-6 py-14 sm:px-8 lg:px-10 xl:px-12">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Bikram Modi</h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Full Stack Developer passionate about building modern, scalable,
              and user-friendly web applications using React, Next.js, Node.js,
              Express, MongoDB, and TypeScript.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

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
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Connect</h3>

            <div className="mb-6 flex items-center gap-3 text-gray-300">
              <Mail size={18} />
              <span>you@example.com</span>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                className="rounded-full border border-gray-700 p-3 transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="rounded-full border border-gray-700 p-3 transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="https://x.com/yourusername"
                target="_blank"
                className="rounded-full border border-gray-700 p-3 transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaXTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Topher. All Rights Reserved.
          </p>

          <button
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
