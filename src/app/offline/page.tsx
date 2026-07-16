export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          You are Offline
        </h1>

        <p className="mt-4 text-gray-600">
          Your internet connection appears to be unavailable.
          Please reconnect and try again.
        </p>
      </div>
    </main>
  );
}