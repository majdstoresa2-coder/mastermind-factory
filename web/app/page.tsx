export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 font-sans dark:from-black dark:to-zinc-900">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-32 px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-white">
            The Mastermind Factory
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            مصنع المولدات الذكي والبيئات الديناميكية
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Web Crawler Agent</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Analyzes trending games and market insights
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Code Generator Agent</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Generates game code and systems automatically
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Character Generator</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Designs characters with dynamic expressions
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🏰</div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Procedural World Agent</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Builds infinite procedurally generated environments
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Automation Deploy Agent</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Tests and deploys games automatically
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Speed Insights</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Monitors performance with Vercel Speed Insights
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>✓ Vercel Speed Insights Enabled</strong> - This application is now monitoring real-world performance metrics.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
