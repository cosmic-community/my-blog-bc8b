import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <span className="text-6xl">🔍</span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight">Page Not Found</h1>
      <p className="mt-3 text-gray-600">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </div>
  )
}