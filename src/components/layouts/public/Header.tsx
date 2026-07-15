'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      {/* Desktop Header */}
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="text-3xl font-black text-blue-600 transition-transform duration-300 group-hover:scale-110">
              &lt;/&gt;
            </span>

            <div className="leading-none">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Bikram Modi
              </span>

              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gray-500">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-semibold transition-colors duration-300 ${active
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                    }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${active ? 'w-full' : 'w-0'
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Hire Me
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
            <nav className="space-y-2 py-6">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition ${active
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 hover:bg-gray-100'
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Hire Me
                <ArrowUpRight size={18} />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
