import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import MenuBar from "./components/menu-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next.js RSC Time Example",
  description: "A minimal Next.js app with React Server Components",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuBar />
        <main className="min-h-screen flex flex-col bg-gray-100 pt-16">
          <div className="flex-1 flex items-center justify-center">{children}</div>
        </main>
      </body>
    </html>
  )
}
