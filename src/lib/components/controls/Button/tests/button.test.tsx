import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Button } from '..'

describe('Button', () => {
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
