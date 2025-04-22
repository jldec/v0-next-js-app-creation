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
          </div>
        )}

        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </Card>
  )
}
