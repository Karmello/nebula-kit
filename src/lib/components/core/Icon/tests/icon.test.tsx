import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { resolveLengthValue } from 'lib/helpers'

import { Icon } from '..'
import { DEFAULT_ICON_SIZE } from '../definitions'

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
      width: resolveLengthValue(DEFAULT_ICON_SIZE),
      height: resolveLengthValue(DEFAULT_ICON_SIZE),
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
