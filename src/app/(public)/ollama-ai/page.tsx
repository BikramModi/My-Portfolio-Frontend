import { ChatLayout } from "@/components/pages/public/ai";

export default function AIPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          AI Playground 123
        </h1>

        <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">
          Interact with locally hosted Ollama models through a private
          self-hosted AI environment.
        </p>
      </div>

      {/* Ollama Infrastructure Notice */}
      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-bold text-amber-950">
              Ollama Self-Hosted Environment
            </h2>

            <p className="mt-2 text-sm leading-6 text-amber-900/80">
              This Ollama instance is running on a resource-constrained
              self-hosted server. Supported models can be loaded successfully,
              but the available server resources may not be sufficient for
              reliable inference and response generation.
            </p>

            <div className="mt-4 rounded-xl border border-amber-200 bg-white/70 p-4">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
                  aria-hidden="true"
                >
                  <path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7 3L13.7 2.9a2 2 0 0 0-3.4 0Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>

                <p className="text-xs leading-5 text-amber-800">
                  <span className="font-semibold">
                    Current limitation:
                  </span>{" "}
                  Models may load successfully while chat requests fail to
                  generate a response because of limited CPU, memory, or other
                  server resources. This is an infrastructure limitation of
                  the current self-hosted environment.
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs font-medium text-amber-700">
              Model loading is currently available for demonstration and
              testing. Reliable production inference requires additional
              computational resources.
            </p>
          </div>
        </div>
      </div>

      <ChatLayout />
    </main>
  );
}