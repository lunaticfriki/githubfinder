import '@testing-library/jest-dom'

import { describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import User from '../User'

describe('User component', () => {
  it('should render component with user', async () => {
    render(<User username="getify" />)
    const component = await screen.findByTestId('user-component')
    expect(component).toBeInTheDocument()
  })

  it('should display a message without a user', async () => {
    render(<User username="" />)
    const message = await screen.findByTestId('no-user-message')
    expect(message).toBeInTheDocument()
  })
})
