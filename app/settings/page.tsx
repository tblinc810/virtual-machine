export default function Settings() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Settings
        </h1>
        <div className="space-y-6">
          <div className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Profile Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Notifications
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700"
                  defaultChecked
                />
                <span className="text-zinc-700 dark:text-zinc-300">
                  Email notifications
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700"
                />
                <span className="text-zinc-700 dark:text-zinc-300">
                  Push notifications
                </span>
              </label>
            </div>
          </div>

          <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
