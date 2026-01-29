export default function Projects() {
  const projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 65 },
    { id: 2, name: 'Mobile App', status: 'Planning', progress: 20 },
    { id: 3, name: 'API Integration', status: 'Completed', progress: 100 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          Projects
        </h1>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-black p-6 rounded-lg border border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {project.name}
                </h3>
                <span className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {project.status}
                </span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                {project.progress}% complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
