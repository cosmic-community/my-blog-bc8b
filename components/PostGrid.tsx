import type { Post } from '@/types'
import PostCard from '@/components/PostCard'

interface PostGridProps {
  posts: Post[]
  emptyMessage?: string
}

export default function PostGrid({ posts, emptyMessage }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        {emptyMessage || 'No posts found.'}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}