export default function Analytics() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Analytics
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Page Views
            </h3>
            <div className="space-y-3">
              {['Home', 'Dashboard', 'Projects', 'Analytics'].map((page, i) => (
                <div key={page} className="flex items-center justify-between">
                  <span className="text-zinc-700 dark:text-zinc-300">{page}</span>
                  <span className="font-semibold text-black dark:text-white">
                    {1234 - i * 200}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              User Engagement
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Average Session
                  </span>
                  <span className="text-sm font-semibold text-black dark:text-white">
                    4:23
                  </span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '73%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    Bounce Rate
                  </span>
                  <span className="text-sm font-semibold text-black dark:text-white">
                    32%
                  </span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '32%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
