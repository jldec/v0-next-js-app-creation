import TimeUpdater from "./time-updater"
import Card from "./components/card"

export const dynamic = "force-dynamic" // This ensures the page is always dynamically rendered

export default async function Home() {
  // Use the current time directly for simplicity and reliability
  const serverTime = new Date().toLocaleString("en-US", {
    timeZoneName: "short",
  })

  return (
    <Card title="RSC Time">
      <p className="mb-2">Server: {serverTime}</p>
      <TimeUpdater />
    </Card>
  )
}
