import { Repo } from './types'
import { FaCodeBranch, FaStar } from 'react-icons/fa'

interface Props {
  repo: Repo
}

const Repo = ({ repo }: Props) => {
  return (
    <div className="w-full border border-primary my-2 p-4 rounded flex flex-col justify-center items-center md:min-w-[700px]">
      <p className="text-2xl">{repo.name}</p>
      <a href={repo.url} target="_blank" data-testid="repo-url">
        {repo.url}
      </a>
      <section className="py-2 flex justify-center items-center">
        <FaStar className="text-primary" />
        <p className="px-2">{repo.stargazerCount}</p>
        <FaCodeBranch className="text-primary" />
        <p className="px-2">{repo.forkCount}</p>
      </section>
    </div>
  )
}

export default Repo
