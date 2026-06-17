export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-gray-500 sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} My Blog. Built with Next.js &amp; Cosmic.
        </p>
      </div>
    </footer>
  )
}