import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '..'

describe('Button', () => {
  it('renders as <button> by default', () => {
    render(<Button tagAttrs={{ 'data-testid': 'elem' }}>Button</Button>)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('button')
  })

  it('renders with children text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders with iconName', () => {
    render(<Button iconName="search">Search</Button>)
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
