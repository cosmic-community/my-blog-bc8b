import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  if (!post) return null

  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category
  const author = post.metadata?.author
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/posts/${post.slug}`}>
        {featuredImage ? (
          <div className="aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={250}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="aspect-[16/10] bg-gradient-to-br from-brand-100 to-brand-200" />
        )}
      </Link>
      <div className="p-5">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="text-xs font-semibold uppercase tracking-wide text-brand-600 hover:text-brand-700"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
          <Link href={`/posts/${post.slug}`} className="transition-colors hover:text-brand-600">
            {title}
          </Link>
        </h3>
        {author && (
          <p className="mt-3 text-sm text-gray-500">
            By{' '}
            <Link
              href={`/authors/${author.slug}`}
              className="font-medium text-gray-700 hover:text-brand-600"
            >
              {getMetafieldValue(author.metadata?.name) || author.title}
            </Link>
          </p>
        )}
      </div>
    </article>
  )
}