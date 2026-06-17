interface TagListProps {
  tags: string[]
  className?: string
}

export default function TagList({ tags, className }: TagListProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className || ''}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
        >
          #{tag}
        </span>
      ))}
    </div>
  )
}