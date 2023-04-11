export type Data = {
  user: User | undefined
}

export interface User {
  id: string
  avatarUrl: string
  bio: string
  name: string
  username: string
  followers: FollowersOrFollowing
  following: FollowersOrFollowing
  repositories: Repositories
}

export interface FollowersOrFollowing {
  totalCount: number
}

export interface Repositories {
  totalCount: number
  nodes?: Repo[] | null
}

export interface Repo {
  url: string
  name: string
  stargazerCount: number
  forkCount: number
}
