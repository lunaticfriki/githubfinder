import { fireEvent, render, screen } from '@testing-library/react'

import Search from '@/components/Search'
import { vi } from 'vitest'

describe('Search component', () => {
  it('should set the username', async () => {
    const setUsername = vi.fn()
    render(<Search setUsername={setUsername} />)
    const input = await screen.findByTestId('input')
    const form = await screen.findByTestId('form')
    fireEvent.change(input, { target: { value: 'name' } })
    fireEvent.submit(form)

    expect(setUsername).toHaveBeenCalledTimes(1)
  })

  it('should return without submit if input is empty', async () => {
    const setUsername = vi.fn()
    render(<Search setUsername={setUsername} />)
    const submit = await screen.findByTestId('submit')
    fireEvent.click(submit)

    expect(setUsername).toHaveBeenCalledTimes(0)
  })
})
