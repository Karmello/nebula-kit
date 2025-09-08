import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { WithIcon } from '..'

describe('<WithIcon />', () => {
  it('renders just the icon when no children are provided', () => {
    render(<WithIcon elemProps={{ 'data-testid': 'with-icon' }} iconName="search" />)
    const el = screen.getByTestId('with-icon')
    expect(el).toBeInTheDocument()
    expect(el.textContent).toBe('')
  })

  it('renders icon on the left by default', () => {
    render(<WithIcon iconName="search">hello</WithIcon>)
    const el = screen.getByText('hello')
    expect(el.firstChild.nodeName.toLowerCase()).toBe('svg')
  })

  it('renders icon on the right when iconPosition="right"', () => {
    render(
      <WithIcon iconName="search" iconPosition="right">
        hello
      </WithIcon>
    )
    const el = screen.getByText('hello')
    expect(el.lastChild.nodeName.toLowerCase()).toBe('svg')
  })
})
