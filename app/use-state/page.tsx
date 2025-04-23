"use client"

import { useState } from "react"
import Card from "../components/card"

export default function UseStatePage() {
  const [count, setCount] = useState(0)

  // Simple function to increment the counter
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  // Simple function to increment twice
  const incrementTwice = () => {
    increment()
    increment()
  }

  return (
    <Card title="useState">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold mb-4">{count}</p>

        <div className="flex gap-2 mb-2">
          <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Increment
          </button>

          <button onClick={incrementTwice} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Twice
          </button>
        </div>

        <div className="flex gap-3 mt-2 text-xs text-gray-400">
          <a
            href="https://react.dev/reference/react/useState"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            docs
          </a>
          <a
            href="https://github.com/jldec/v0-next-js-app-creation/blob/main/app/use-state/page.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            code
          </a>
        </div>
      </div>
    </Card>
  )
}
