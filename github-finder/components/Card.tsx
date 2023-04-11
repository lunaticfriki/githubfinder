import { Repo as RepoType, User } from './types'

import Image from 'next/image'
import Repo from './Repo'

interface Props {
  user: User | undefined
}

const Card = ({ user }: Props) => {
  return (
    <article
      className="p-4 flex flex-wrap flex-col items-center"
      data-testid="card-component"
    >
      <p data-testid="username">@{user?.username}</p>
      <Image
        src={user?.avatarUrl ? user.avatarUrl : ''}
        alt={user?.name ? user.name : ''}
        className="rounded-full my-4 w-3/12"
        width={200}
        height={200}
      />

      <section className="mx-auto my-4 flex flex-wrap flex-col justify-center">
        <h2 className="my-2 uppercase text-white text-4xl">{user?.name}</h2>
        <p className="mb-6 italic">{user?.bio}</p>

        <p>
          <span className="pe-2">Total followers: </span>
          {user?.followers.totalCount}
        </p>

        <p>
          <span className="pe-2">Total following: </span>
          {user?.following.totalCount}
        </p>
        <span className="my-4 text-2xl">Repositories: </span>
        {user?.repositories?.nodes?.map((repo: RepoType) => (
          <Repo repo={repo} key={repo.name} />
        ))}
      </section>
    </article>
  )
}

export default Card
