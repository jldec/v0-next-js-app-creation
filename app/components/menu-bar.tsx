import NavMenu from "./nav-menu"
import Link from "next/link"

export default function MenuBar() {
  return (
    <div className="w-full bg-white shadow-sm py-3 px-4 mb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold text-gray-800 hover:text-blue-500">
          Next.js RSC Examples
        </Link>
        <NavMenu />
      </div>
    </div>
  )
}
