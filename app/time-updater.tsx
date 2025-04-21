"use client"

import { useState, useEffect } from "react"

export default function TimeUpdater() {
  const [clientTime, setClientTime] = useState("Not updated yet")
  const [lastSaved, setLastSaved] = useState<string | null>(null)
  const [isPreview, setIsPreview] = useState(false)

  // Check if we're in preview mode on component mount
  useEffect(() => {
    // Check if we're in preview mode (this is a simple heuristic)
    const hostname = window.location.hostname
    const isPreviewMode = hostname === "localhost" || hostname.includes("vercel.app") || hostname.includes("preview")

    setIsPreview(isPreviewMode)

    if (isPreviewMode) {
      // Set initial last saved time
      setLastSaved(new Date().toLocaleString("en-US", { timeZoneName: "short" }))
    }
  }, [])

  const updateTime = () => {
    setClientTime(
      new Date().toLocaleString("en-US", {
        timeZoneName: "short",
      }),
    )
  }

  // Format the commit SHA to show only the first 7 characters
  const formatCommitSha = (sha: string) => {
    if (sha === "development") return sha
    return sha.substring(0, 7)
  }

  const commitSha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "development"

  return (
    <div>
      <p className="mb-4">Client: {clientTime}</p>
      <button onClick={updateTime} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Update Client Time
      </button>

      <div className="mt-4 text-sm text-gray-500 flex flex-col gap-1">
        <div className="flex flex-wrap gap-3">
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

        {/* Commit hash display - shortened to 7 characters */}
        <p className="mt-2 text-xs text-gray-400">Commit: {formatCommitSha(commitSha)}</p>

        {/* Last saved indicator for preview mode */}
        {isPreview && lastSaved && <p className="mt-1 text-xs text-gray-400">Last saved: {lastSaved}</p>}
      </div>
    </div>
  )
}
