import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  if (!category) return null

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-xl">
        🏷️
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}
    </Link>
  )
}