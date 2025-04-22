"use client"

import { useState } from "react"
import Link from "next/link"
import MenuBar from "../components/menu-bar"

export default function UseStatePage() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      <MenuBar />
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">useState Example</h1>

          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold mb-4">{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment
            </button>

            <a
              href="https://react.dev/reference/react/useState"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs text-gray-400 hover:underline"
            >
              docs
            </a>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
