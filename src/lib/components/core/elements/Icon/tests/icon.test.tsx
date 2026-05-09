import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { resolveSizeValue } from 'lib/helpers'

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
      width: resolveSizeValue(DEFAULT_ICON_SIZE),
      height: resolveSizeValue(DEFAULT_ICON_SIZE),
    })
  })

  it('applies custom size and intent', () => {
    render(<Icon tagAttrs={{ 'data-testid': 'icon' }} name="search" size="20px" intent="primary" />)
    const el = screen.getByTestId('icon').querySelector('svg')
    expect(el).toHaveStyle({
      width: '20px',
      height: '20px',
    })
  })
})
