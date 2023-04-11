import { render, screen, waitFor } from '@testing-library/react'

import User from '../User'

describe('User component', () => {
  const props = {
    error: false,
    isValidating: false,
    data: {
      user: {
        id: '',
        avatarUrl: '',
        bio: '',
        name: '',
        username: '',
        followers: { totalCount: 2 },
        following: { totalCount: 2 },
        repositories: {
          totalCount: 1,
          nodes: [{ url: '', name: '', stargazerCount: 1, forkCount: 1 }],
        },
      },
    },
  }

  it('should display the user', async () => {
    render(<User {...props} />)
    const card = await screen.findByTestId('card-component')
    await waitFor(() => expect(card).toBeInTheDocument())
  }, 5000)
})
