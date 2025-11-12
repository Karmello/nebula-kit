import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { DEFAULT_ICON_SIZE } from '../definitions'
import { Icon } from '..'

describe('<Icon />', () => {
  it('renders Icon component', () => {
    render(<Icon tagAttrs={{ 'data-testid': 'icon' }} name="search" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })

  it('applies default size and intent', () => {
    render(<Icon tagAttrs={{ 'data-testid': 'icon' }} name="search" />)
    const el = screen.getByTestId('icon').querySelector('svg')
    expect(el).toHaveStyle({
      width: `var(--neb-scale-${DEFAULT_ICON_SIZE})`,
      height: `var(--neb-scale-${DEFAULT_ICON_SIZE})`,
    })
  })

  it('applies custom size and intent', () => {
    render(<Icon tagAttrs={{ 'data-testid': 'icon' }} name="search" size={20} intent="primary" />)
    const el = screen.getByTestId('icon').querySelector('svg')
    expect(el).toHaveStyle({
      width: 'var(--neb-scale-20)',
      height: 'var(--neb-scale-20)',
    })
  })
})
