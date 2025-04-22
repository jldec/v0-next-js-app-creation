import type React from "react"

interface CardProps {
  title?: string
  children: React.ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg min-w-[320px]">
      {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
      {children}
    </div>
  )
}
