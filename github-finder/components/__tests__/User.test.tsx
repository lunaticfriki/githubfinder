import { render, screen, waitFor } from '@testing-library/react'

import User from '../User'
import { vi } from 'vitest'

describe('User component', () => {
  it('should render component', async () => {
    render(<User username="lunaticfriki" />)
    const component = await screen.findByTestId('user-component')
    expect(component).toBeInTheDocument()
  })

  it('should display a message without a user', async () => {
    render(<User username="" />)
    const message = await screen.findByTestId('no-user-message')
    expect(message).toBeInTheDocument()
  })

  it('should display an error message if there is no user found', async () => {
    render(<User username="getify1" />)
    const errorMessage = await screen.findByTestId('error-message')
    expect(errorMessage).toBeInTheDocument()
  })
})
