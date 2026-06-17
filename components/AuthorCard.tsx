import Link from 'next/link'
import type { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  if (!author) return null

  const avatar = author.metadata?.avatar
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {avatar ? (
        <img
          src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={name}
          width={80}
          height={80}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-2xl font-bold text-brand-600">
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        {bio && <p className="mt-1 line-clamp-2 text-sm text-gray-500">{bio}</p>}
      </div>
    </Link>
  )
}