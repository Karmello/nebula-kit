import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { IconButton } from '..'

describe('IconButton', () => {
  it('renders as <button> by default', () => {
    render(<IconButton iconName="search" tagAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('button')
  })

  it('renders with iconName', () => {
    render(<IconButton iconName="search" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
