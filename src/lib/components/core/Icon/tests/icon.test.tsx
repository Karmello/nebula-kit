import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Icon } from '..'

describe('<Icon />', () => {
  it('renders Icon component', () => {
    render(<Icon tagAttrs={{ 'data-testid': 'icon' }} name="search" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })
})
