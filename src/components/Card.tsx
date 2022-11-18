interface CardProps {
  name: string
  user: string
}

export const Card = ({name, user}: CardProps) => {
  return (
    <div className="p-4 bg-zinc-600 w-full">
      <strong>{name}</strong>
      <span>{user}</span>
    </div>
  )
}