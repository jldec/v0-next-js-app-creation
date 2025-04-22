"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Card from "../components/card"

export default function UseStatePage() {
  const [count, setCount] = useState(0)

  // Create an increment function that can be called multiple times
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  // Function to increment twice
  const incrementTwice = useCallback(() => {
    increment()
    increment()
  }, [increment])

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
    </Card>
  )
}
