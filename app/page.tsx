import TimeUpdater from "./time-updater"

export default async function Home() {
  const serverTime = new Date().toLocaleString("en-US", {
    timeZoneName: "short",
  })

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Next.js RSC Time Example</h1>
        <p className="mb-2">Server Time (rendered on server): {serverTime}</p>
        <TimeUpdater />
      </div>
    </main>
  )
}
