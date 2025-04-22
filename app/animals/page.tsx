"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Card from "../components/card"

interface Animal {
  id: number
  animal: string
  says: string
}

export default function AnimalsPage() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    async function fetchAnimals() {
      try {
        setLoading(true)
        const response = await fetch("/data/animal_sayings.json")

        if (!response.ok) {
          throw new Error(`Failed to fetch animals: ${response.status}`)
        }

        const data = await response.json()
        setAnimals(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchAnimals()
  }, [])

  return (
    <div className="flex flex-col items-center w-full">
      <Card title="Animals">
        <div className="flex flex-col items-center">
          {loading ? (
            <div className="flex flex-col items-center py-8">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p>Loading animals...</p>
            </div>
          ) : error ? (
            <div className="text-red-500 py-4">
              <p>Error: {error}</p>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-2xl font-bold mb-2">{animals.length}</p>
              <p className="mb-4">Animal sayings found in the database</p>

              <div className="text-sm text-gray-500 mb-4">
                <p>
                  From {animals[0]?.animal} to {animals[animals.length - 1]?.animal}
                </p>
              </div>

              <button
                onClick={() => setShowList(!showList)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                {showList ? "Hide List" : "Show List"}
              </button>
            </div>
          )}

          <div className="mt-6">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </Card>

      {showList && !loading && !error && (
        <div className="w-full max-w-4xl mt-6 bg-white rounded-lg shadow-lg p-6 relative">
          <button
            onClick={() => setShowList(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200"
            aria-label="Close list"
          >
            ×
          </button>
          <h2 className="text-xl font-bold mb-4">Animal Sayings</h2>
          <div className="divide-y">
            {animals.map((animal) => (
              <div key={animal.id} className="py-3 flex flex-col sm:flex-row sm:items-center">
                <div className="font-medium w-40">{animal.animal}</div>
                <div className="text-gray-600 flex-1">{animal.says}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
