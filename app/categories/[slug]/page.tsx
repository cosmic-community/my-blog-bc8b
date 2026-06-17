// app/categories/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategory, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    return { title: 'Category Not Found | My Blog' }
  }

  const name = getMetafieldValue(category.metadata?.name) || category.title
  return { title: `${name} | My Blog` }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const posts = await getPostsByCategory(category.id)

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-2xl">
          🏷️
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{name}</h1>
        {description && <p className="mt-3 max-w-2xl text-gray-600">{description}</p>}
      </header>

      <PostGrid posts={posts} emptyMessage="No posts in this category yet." />
    </div>
  )
}