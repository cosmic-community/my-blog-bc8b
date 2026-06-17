import Link from 'next/link'
import { getPosts } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'
import type { Post } from '@/types'

export default async function HomePage() {
  const posts = await getPosts()
  const featuredPost: Post | undefined = posts[0]
  const restPosts = posts.slice(1)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Welcome to <span className="text-gradient">My Blog</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Stories, ideas, and creative work from our writers.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-14">
          <Link
            href={`/posts/${featuredPost.slug}`}
            className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              {featuredPost.metadata?.featured_image ? (
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 md:aspect-auto">
                  <img
                    src={`${featuredPost.metadata.featured_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                    alt={getMetafieldValue(featuredPost.metadata?.title) || featuredPost.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-[16/10] bg-gradient-to-br from-brand-100 to-brand-200 md:aspect-auto" />
              )}
              <div className="flex flex-col justify-center p-8">
                {featuredPost.metadata?.category && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {getMetafieldValue(featuredPost.metadata.category.metadata?.name) ||
                      featuredPost.metadata.category.title}
                  </span>
                )}
                <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-brand-600 sm:text-3xl">
                  {getMetafieldValue(featuredPost.metadata?.title) || featuredPost.title}
                </h2>
                {featuredPost.metadata?.author && (
                  <p className="mt-4 text-sm text-gray-500">
                    By{' '}
                    {getMetafieldValue(featuredPost.metadata.author.metadata?.name) ||
                      featuredPost.metadata.author.title}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Recent Posts */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
          <Link href="/posts" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            View all →
          </Link>
        </div>
        <PostGrid posts={restPosts} emptyMessage="No more posts yet. Check back soon!" />
      </section>
    </div>
  )
}