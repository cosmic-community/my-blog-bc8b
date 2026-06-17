// app/posts/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, getMetafieldValue, normalizeTags } from '@/lib/cosmic'
import TagList from '@/components/TagList'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Post Not Found | My Blog' }
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  return {
    title: `${title} | My Blog`,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const content = getMetafieldValue(post.metadata?.content)
  const tags = normalizeTags(post.metadata?.tags)

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      {category && (
        <Link
          href={`/categories/${category.slug}`}
          className="text-sm font-semibold uppercase tracking-wide text-brand-600 hover:text-brand-700"
        >
          {getMetafieldValue(category.metadata?.name) || category.title}
        </Link>
      )}

      <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>

      {author && (
        <div className="mt-5 flex items-center gap-3">
          {author.metadata?.avatar ? (
            <img
              src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={getMetafieldValue(author.metadata?.name) || author.title}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-600">
              {(getMetafieldValue(author.metadata?.name) || author.title).charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <Link
              href={`/authors/${author.slug}`}
              className="font-medium text-gray-900 hover:text-brand-600"
            >
              {getMetafieldValue(author.metadata?.name) || author.title}
            </Link>
          </div>
        </div>
      )}

      {featuredImage && (
        <div className="mt-8 overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg mt-8 max-w-none prose-headings:font-bold prose-a:text-brand-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags.length > 0 && (
        <div className="mt-10 border-t border-gray-200 pt-6">
          <TagList tags={tags} />
        </div>
      )}

      <div className="mt-10">
        <Link href="/posts" className="text-sm font-medium text-brand-600 hover:text-brand-700">
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}