import TimeUpdater from "./time-updater"
import MenuBar from "./components/menu-bar"

export const dynamic = "force-dynamic" // This ensures the page is always dynamically rendered

export default async function Home() {
  // Use the current time directly for simplicity and reliability
  const serverTime = new Date().toLocaleString("en-US", {
    timeZoneName: "short",
  })

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <MenuBar />
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Next.js RSC Time Example</h1>
          <p className="mb-2">Server: {serverTime}</p>
          <TimeUpdater />
        </div>
      </div>
    </main>
  )
}
