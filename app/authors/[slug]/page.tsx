// app/authors/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAuthor, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params
  const author = await getAuthor(slug)

  if (!author) {
    return { title: 'Author Not Found | My Blog' }
  }

  const name = getMetafieldValue(author.metadata?.name) || author.title
  return { title: `${name} | My Blog` }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = await getAuthor(slug)

  if (!author) {
    notFound()
  }

  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar
  const posts = await getPostsByAuthor(author.id)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-10 flex flex-col items-center text-center">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
            alt={name}
            width={120}
            height={120}
            className="h-28 w-28 rounded-full object-cover shadow-md"
          />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-100 text-4xl font-bold text-brand-600 shadow-md">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight">{name}</h1>
        {bio && <p className="mt-3 max-w-2xl text-gray-600">{bio}</p>}
      </header>

      <h2 className="mb-6 text-2xl font-bold text-gray-900">Posts by {name}</h2>
      <PostGrid posts={posts} emptyMessage={`${name} hasn't published any posts yet.`} />
    </div>
  )
}