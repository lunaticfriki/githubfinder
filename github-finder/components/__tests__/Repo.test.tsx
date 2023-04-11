import { render, screen } from '@testing-library/react'

import Repo from '@/components/Repo'

describe('Error component', () => {
  const repo = {
    url: 'test url',
    name: 'test name',
    stargazerCount: 1,
    forkCount: 1,
  }
  it('should render repo name', async () => {
    render(<Repo repo={repo} />)
    const name = await screen.findByText('test name')
    expect(name).toBeInTheDocument()
  })

  it('should display repo url', async () => {
    render(<Repo repo={repo} />)
    const url = await screen.findByRole('link')
    expect(url).toHaveAttribute('href', repo.url)
  })
})
