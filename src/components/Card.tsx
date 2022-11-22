interface CardProps {
  id: number
  name: string
  user: string
  avatar: string
  url: string
  handleRemoveRepo: (id: number) => void
}

export const Card = ({id, name, user, avatar, url, handleRemoveRepo}: CardProps) => {
  const handleRemove = () => {
    handleRemoveRepo(id)
  }

  return (
    <div className="p-4 bg-zinc-700 w-full flex gap-2 rounded-md mt-4 relative">
      <div>
        <img className="w-14 h-14 rounded-full" src={avatar} alt="github avatar" />
      </div>

      <div>
        <span className="block">{user}</span>
        <a className="font-bold" href={url}>{name}</a>
      </div>

      <button onClick={handleRemove} className="absolute font-bold right-2 text-red-600 top-2/4 -translate-y-1/4">X</button>
    </div>
  )
}