import { render, screen } from '@testing-library/react'

import Card from '../Card'
import { User } from '@/components/types'

describe('User component', () => {
  const user: User = {
    id: '1',
    avatarUrl: '',
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
  it('should render component with user', async () => {
    render(<Card user={user} />)
    const component = await screen.findByTestId('card-component')
    expect(component).toBeInTheDocument()
  })

  it('should display the username', async () => {
    render(<Card user={user} />)
    const username = await screen.findByTestId('username')
    expect(username).toHaveTextContent(`@${user.name}`)
  })
})
