import NavMenu from "./nav-menu"
import Link from "next/link"

export default function MenuBar() {
  return (
    <div className="w-full bg-white shadow-sm py-3 px-4 fixed top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold text-gray-800 hover:text-blue-500">
          Next.js Examples
        </Link>
        <NavMenu />
      </div>
    </div>
  )
}
