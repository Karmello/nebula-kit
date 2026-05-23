import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { HtmlTag } from 'lib/components'

describe('<HtmlTag />', () => {
  it('renders as <div> by default', () => {
    render(<HtmlTag tagAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })

  it('renders as <a> tag', () => {
    render(<HtmlTag tag="a" tagAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('a')
  })

  it('renders as <button> tag', () => {
    render(<HtmlTag tag="button" tagAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('button')
  })
})
