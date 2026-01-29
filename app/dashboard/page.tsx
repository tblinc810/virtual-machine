export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
              Total Projects
            </h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
              Active Tasks
            </h3>
            <p className="text-3xl font-bold text-green-600">24</p>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
              Completed
            </h3>
            <p className="text-3xl font-bold text-purple-600">89</p>
          </div>
        </div>
      </div>
    </div>
  );
}
