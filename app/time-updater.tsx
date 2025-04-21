"use client"

import { useState } from "react"

export default function TimeUpdater() {
  const [clientTime, setClientTime] = useState("Not updated yet")

  const updateTime = () => {
    setClientTime(new Date().toLocaleString())
  }

  return (
    <div>
      <p className="mb-4">Client Time: {clientTime}</p>
      <button onClick={updateTime} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Update Client Time
      </button>

      <div className="mt-4 text-sm text-gray-500 flex flex-wrap gap-3">
        <a href="https://v0-next-js-app-creation-phi.vercel.app/" className="underline">
          deployed app
        </a>
        <a href="https://grok.com/share/bGVnYWN5_692dfbef-1bb9-4480-9f62-0a79a364891c" className="underline">
          grok chat
        </a>
        <a href="https://v0.dev/chat/next-js-app-creation-Ch5o7lUJBPN" className="underline">
          v0 chat
        </a>
        <a href="https://github.com/jldec/v0-next-js-app-creation" className="underline">
          github
        </a>
      </div>
    </div>
  )
}
