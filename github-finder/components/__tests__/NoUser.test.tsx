import { render, screen } from '@testing-library/react'

import NoUser from '@/components/NoUser'

describe('NoUser component', () => {
  it('should render error message', async () => {
    render(<NoUser />)
    const message = await screen.findByTestId('no-user-message')
    expect(message).toBeInTheDocument()
  })
})
