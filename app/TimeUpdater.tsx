"use client"

import { useState } from "react"

export default function TimeUpdater() {
  const [clientTime, setClientTime] = useState("Not updated yet")

  const updateTime = () => {
    setClientTime(new Date().toLocaleString())
  }

  return (
    <div>
      <p className="mb-4">Client: {clientTime}</p>
      <button onClick={updateTime} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Update Client Time
      </button>
    </div>
  )
}
