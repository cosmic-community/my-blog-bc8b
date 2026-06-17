import type { Metadata } from 'next'
import { getAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export const metadata: Metadata = {
  title: 'Authors | My Blog',
  description: 'Meet the writers behind My Blog.',
}

export default async function AuthorsPage() {
  const authors = await getAuthors()

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Authors</h1>
        <p className="mt-2 text-gray-600">Meet the creative minds behind our posts.</p>
      </header>

      {authors.length === 0 ? (
        <p className="py-12 text-center text-gray-500">No authors found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  )
}