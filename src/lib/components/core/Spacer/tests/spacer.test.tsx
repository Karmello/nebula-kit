import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Spacer } from '..'

describe('Spacer', () => {
  it('renders as <div> by default', () => {
    render(<Spacer tagAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })
})
