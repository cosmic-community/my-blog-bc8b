import type { Metadata } from 'next'
import { getPosts } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

export const metadata: Metadata = {
  title: 'All Posts | My Blog',
  description: 'Browse all blog posts.',
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">All Posts</h1>
        <p className="mt-2 text-gray-600">Explore everything we&apos;ve published.</p>
      </header>
      <PostGrid posts={posts} />
    </div>
  )
}