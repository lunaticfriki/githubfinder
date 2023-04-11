import { render, screen, waitFor } from '@testing-library/react'

import User from '../User'
import { userFixture } from '@/components/__tests__/user-fixture'

describe('User component', () => {
  const props = {
    error: false,
    isValidating: false,
    data: {
      user: userFixture,
    },
  }

  it('should display the user', async () => {
    render(<User {...props} />)
    const card = await screen.findByTestId('card-component')
    expect(card).toBeInTheDocument()
  })
})
