import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HtmlElem } from '../html-elem'

describe('<HtmlElem />', () => {
  it('renders as <div> by default', () => {
    render(<HtmlElem elemAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })

  it('renders as <a> tag', () => {
    render(<HtmlElem elemTag="a" elemAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('a')
  })

  it('renders as <button> tag', () => {
    render(<HtmlElem elemTag="button" elemAttrs={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('button')
  })
})
