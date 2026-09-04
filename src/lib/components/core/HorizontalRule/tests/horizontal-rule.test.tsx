import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HorizontalRule } from '..'

describe('<HorizontalRule />', () => {
  it('renders as hr', () => {
    render(<HorizontalRule tagAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el).toBeInTheDocument()
    expect(el.tagName.toLowerCase()).toBe('hr')
  })
})
