'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? 'font-semibold text-blue-600'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/login"
            className="rounded-md bg-black px-4 py-2 text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
