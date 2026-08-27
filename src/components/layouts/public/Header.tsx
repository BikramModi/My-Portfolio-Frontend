'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Brain,
  Bot,
  Server,
  Network,
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const aiItems = [
  {
    name: 'Gen AI',
    href: '/gen-ai',
    description: 'Generative AI experiences',
    icon: Sparkles,
  },
  {
    name: 'RAG AI',
    href: '/rag-ai',
    description: 'Knowledge-grounded AI',
    icon: Brain,
  },
  {
    name: 'Agentic AI',
    href: '/agentic-ai',
    description: 'Autonomous AI agents',
    icon: Bot,
  },
  {
    name: 'Ollama AI',
    href: '/ollama-ai',
    description: 'Local AI model experiences',
    icon: Server,
  },
  {
    name: 'AGI AI',
    href: '/agi-ai',
    description: 'Future general intelligence',
    icon: Network,
  },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const isAIActive = aiItems.some(
    (item) => pathname === item.href,
  );

  const closeMobileMenu = () => {
    setOpen(false);
    setAiOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      {/* Header Container */}
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <span className="text-3xl font-black text-blue-600 transition-transform duration-300 group-hover:scale-110">
              &lt;/&gt;
            </span>

            <div className="leading-none">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Bikram Modi
              </span>

              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gray-500">
                AI + Full Stack Developer
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
                  className={`relative text-sm font-semibold transition-colors duration-300 ${
                    active
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              );
            })}

            {/* AI Lab */}
            <div
              className="relative"
              onMouseEnter={() => setAiOpen(true)}
              onMouseLeave={() => setAiOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={aiOpen}
                onClick={() =>
                  setAiOpen((value) => !value)
                }
                className={`relative flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${
                  isAIActive
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                AI Lab

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    aiOpen ? 'rotate-180' : ''
                  }`}
                />

                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                    isAIActive ? 'w-full' : 'w-0'
                  }`}
                />
              </button>

              {/* Desktop Dropdown */}
              <div
                role="menu"
                aria-hidden={!aiOpen}
                className={`absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-slate-900/10 transition-all duration-200 ${
                  aiOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-1 opacity-0'
                }`}
              >
                {aiItems.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setAiOpen(false)}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                        active
                          ? 'bg-blue-50'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          active
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}
                      >
                        <Icon size={19} />
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`block text-sm font-semibold ${
                            active
                              ? 'text-blue-600'
                              : 'text-slate-900'
                          }`}
                        >
                          {item.name}
                        </span>

                        <span className="mt-0.5 block text-xs text-slate-500">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
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
            type="button"
            aria-label={
              open ? 'Close Menu' : 'Open Menu'
            }
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`border-t border-gray-200 bg-white transition-all duration-300 md:hidden ${
          open
            ? 'block opacity-100'
            : 'hidden opacity-0'
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          <nav className="space-y-2 py-6">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile AI Lab */}
            <div className="rounded-xl">
              <button
                type="button"
                aria-expanded={aiOpen}
                onClick={() =>
                  setAiOpen((value) => !value)
                }
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                  isAIActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={18} />
                  AI Lab
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    aiOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  aiOpen
                    ? 'mt-2 max-h-[600px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-1 pl-3">
                  {aiItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                          active
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-slate-600 hover:bg-gray-100 hover:text-blue-600'
                        }`}
                      >
                        <Icon size={18} />

                        <span>
                          <span className="block text-sm font-semibold">
                            {item.name}
                          </span>

                          <span className="block text-xs text-slate-500">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Hire Me
              <ArrowUpRight size={18} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}