import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { WithIcon } from '..'

describe('<WithIcon />', () => {
  it('renders icon on the left by default', () => {
    render(<WithIcon name="search">hello</WithIcon>)
    const el = screen.getByText('hello')
    expect(el.firstChild.nodeName.toLowerCase()).toBe('span')
  })

  it('renders icon on the right when iconPosition="right"', () => {
    render(
      <WithIcon name="search" position="right">
        hello
      </WithIcon>
    )
    const el = screen.getByText('hello')
    expect(el.lastChild.nodeName.toLowerCase()).toBe('span')
  })
})
