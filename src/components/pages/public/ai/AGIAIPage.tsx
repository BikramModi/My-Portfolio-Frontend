import {
  ArrowUpRight,
  BrainCircuit,
  GitBranch,
  Network,
  Sparkles,
} from 'lucide-react';

const GITHUB_REPO =
  'https://github.com/BikramModi/My-Portfolio-Frontend';

export default function AGIAIPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-slate-50">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-6 py-16 sm:px-8 md:py-20 lg:px-10 xl:px-12">
        <div className="mx-auto w-full max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
            <Sparkles size={16} />
            Future AI Research
          </div>

          {/* Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-100 bg-white shadow-xl shadow-violet-900/10">
            <Network
              size={44}
              className="text-violet-600"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            AGI AI
          </h1>

          {/* Status */}
          <div className="mt-5 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Coming Soon
          </div>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I am exploring the next generation of intelligent
            systems focused on broader reasoning, learning,
            adaptation, planning, and autonomous problem
            solving.
          </p>

          {/* Architecture Preview */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: BrainCircuit,
                title: 'Reasoning',
                text: 'Multi-step problem solving',
              },
              {
                icon: Network,
                title: 'Adaptation',
                text: 'Learning across tasks',
              },
              {
                icon: Sparkles,
                title: 'Autonomy',
                text: 'Independent goal execution',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-lg shadow-slate-900/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <Icon size={21} />
                  </div>

                  <h2 className="mt-5 font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* GitHub CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <GitBranch size={18} />
              Explore My GitHub
              <ArrowUpRight size={17} />
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            Follow the development and experiments through
            my public repositories.
          </p>
        </div>
      </section>
    </main>
  );
}