import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Divider } from '..'

describe('<Divider />', () => {
  it('renders as hr', () => {
    render(<Divider tagAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el).toBeInTheDocument()
    expect(el.tagName.toLowerCase()).toBe('hr')
  })
})
