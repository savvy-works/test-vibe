export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <main className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-charcoal-900">
          LaunchKit Ready
        </h1>
        <p className="text-lg text-gray-600">
          Your SaaS starter kit is successfully set up.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="/login"
            className="px-6 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-6 py-2 rounded-md border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
          >
            Register
          </a>
        </div>
      </main>
    </div>
  );
}
