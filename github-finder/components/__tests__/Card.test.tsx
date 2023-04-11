import { render, screen } from '@testing-library/react'

import Card from '../Card'
import { User } from '@/components/types'
import { userFixture } from '@/components/__tests__/user-fixture'

describe('User component', () => {
  const user: User = userFixture
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
