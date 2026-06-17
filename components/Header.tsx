import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">📝</span>
          <span className="text-xl font-bold text-gradient">My Blog</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="transition-colors hover:text-brand-600">
            Home
          </Link>
          <Link href="/posts" className="transition-colors hover:text-brand-600">
            Posts
          </Link>
          <Link href="/categories" className="transition-colors hover:text-brand-600">
            Categories
          </Link>
          <Link href="/authors" className="transition-colors hover:text-brand-600">
            Authors
          </Link>
        </nav>
      </div>
    </header>
  )
}