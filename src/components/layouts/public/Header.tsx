'use client'; 
 
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
import { useState } from 'react'; 
import { 
  Menu, 
  X, 
  ArrowUpRight, 
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
 
  const isAIActive = aiItems.some( 
    (item) => pathname === item.href, 
  ); 
 
  const closeMobileMenu = () => { 
    setOpen(false); 
  }; 
 
  return ( 
    <> 
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
 
              {/* AI Lab Label */} 
              <div 
                className={`relative flex items-center gap-2 text-sm font-semibold ${ 
                  isAIActive 
                    ? 'text-blue-600' 
                    : 'text-slate-700' 
                }`} 
              > 
                <Sparkles 
                  size={16} 
                  className="text-blue-600" 
                /> 
 
                <span>AI Lab</span> 
 
                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm shadow-blue-600/20"> 
                  New 
                </span> 
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
              <div 
                className={`rounded-xl ${ 
                  isAIActive 
                    ? 'bg-blue-50' 
                    : '' 
                }`} 
              > 
                <div className="flex items-center gap-2 px-4 py-3 text-base font-medium text-slate-700"> 
                  <Sparkles 
                    size={18} 
                    className="text-blue-600" 
                  /> 
 
                  <span>AI Lab</span> 
 
                  <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white"> 
                    New+
                  </span> 
                </div> 
 
                <div className="space-y-1 px-3 pb-3"> 
                  {aiItems.map((item) => { 
                    const Icon = item.icon; 
                    const active = 
                      pathname === item.href; 
 
                    return ( 
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        onClick={closeMobileMenu} 
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${ 
                          active 
                            ? 'bg-blue-100 text-blue-600' 
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
 
      {/* ===================================================== 
          AI LAB QUICK ACCESS RAIL 
      ===================================================== */} 
      <div 
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block" 
        aria-label="AI Lab quick navigation" 
      > 
        <div className="relative flex flex-col items-center gap-4 rounded-full border border-slate-200 bg-white/90 px-2.5 py-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl"> 
          {/* Connecting Line */} 
          <div 
            aria-hidden="true" 
            className="absolute left-1/2 top-7 bottom-7 w-px -translate-x-1/2 bg-slate-200" 
          /> 
 
          {aiItems.map((item, index) => { 
            const Icon = item.icon; 
            const active = pathname === item.href; 
 
            return ( 
              <Link 
                key={item.href} 
                href={item.href} 
                aria-label={item.name} 
                title={item.name} 
                className="group relative z-10" 
              > 
                {/* Pulse Ring */} 
                <span 
                  className={`absolute inset-0 rounded-full ${ 
                    active 
                      ? 'animate-ping bg-blue-400/30' 
                      : 'animate-pulse bg-blue-400/10' 
                  }`} 
                /> 
 
                {/* Circle */} 
                <span 
                  className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${ 
                    active 
                      ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                      : 'border-slate-200 bg-white text-slate-600 shadow-sm group-hover:border-blue-400 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:shadow-md' 
                  }`} 
                > 
                  <Icon size={18} /> 
                </span> 
 
                {/* Tooltip */} 
                <span className="pointer-events-none absolute right-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:block group-hover:opacity-100"> 
                  {item.name} 
 
                  <span className="absolute right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-slate-900" /> 
                </span> 
              </Link> 
            ); 
          })} 
        </div> 
      </div> 
    </> 
  ); 
}  