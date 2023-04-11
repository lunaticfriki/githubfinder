import { useRef } from 'react'

interface Props {
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ setUsername }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLFormElement

    if (!target) return

    e.preventDefault()
    const ghUsername = inputRef.current ? inputRef.current.value : ''

    if (!ghUsername.trim()) return

    setUsername(ghUsername.trim())
    target.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 w-full flex justify-center items-center"
    >
      <input
        ref={inputRef}
        type="search"
        placeholder="Search username..."
        className="rounded mx-4 p-2"
      />
      <input
        type="submit"
        value="Search"
        className="p-2 cursor-pointer border border-primary rounded ease-in duration-300 hover:bg-primary"
      />
    </form>
  )
}

export default Search
