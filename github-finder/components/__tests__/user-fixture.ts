import { User } from '@/components/types'

export const userFixture: User = {
  id: '1',
  avatarUrl: 'https://wwww.test.test',
  bio: '',
  name: 'test',
  username: 'test',
  followers: { totalCount: 2 },
  following: { totalCount: 2 },
  repositories: {
    totalCount: 1,
    nodes: [{ url: '', name: '', stargazerCount: 1, forkCount: 2 }],
  },
}
