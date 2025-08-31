import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { IconButton } from 'lib/components'

describe('IconButton', () => {
  it('renders a native button element', () => {
    render(<IconButton iconName="search" aria-label="Add" />)
    const btn = screen.getByRole('button', { name: /add/i })
    expect(btn).toBeInTheDocument()
  })

  it('merges custom className', () => {
    render(<IconButton iconName="search" className="custom" aria-label="Add" />)
    expect(screen.getByRole('button')).toHaveClass('custom')
  })

  it('is square/icon-only by default (no text content)', () => {
    render(<IconButton iconName="search" aria-label="Add" />)
    expect(screen.getByRole('button').textContent).toBe('')
  })

  it('respects disabled state and blocks clicks', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<IconButton iconName="search" disabled onClick={onClick} aria-label="Add" />)

    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()

    await user.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('fires onClick when enabled', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<IconButton iconName="search" onClick={onClick} aria-label="Add" />)

    await user.click(screen.getByRole('button', { name: /add/i }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies size/variant/intent props (smoke test)', () => {
    render(<IconButton iconName="search" size="lg" variant="solid" intent="primary" aria-label="Add" />)
    // Smoke test: still renders without errors with various skins
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
