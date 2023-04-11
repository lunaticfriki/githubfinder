import { render, screen } from '@testing-library/react'

import Error from '@/components/Error'

describe('Error component', () => {
  it('should render error message', async () => {
    render(<Error message="No user found" />)
    const message = await screen.findByText('No user found')
    expect(message).toBeInTheDocument()
  })
})
