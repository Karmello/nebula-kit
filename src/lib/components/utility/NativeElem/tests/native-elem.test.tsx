import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { NativeElem } from 'lib/components'

describe('<NativeElem />', () => {
  it('renders as <div> by default', () => {
    render(<NativeElem elemProps={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })

  it('renders as <a> tag', () => {
    render(<NativeElem elem="a" elemProps={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('a')
  })

  it('renders as <button> tag', () => {
    render(<NativeElem elem="button" elemProps={{ 'data-testid': 'elem' }} />)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('button')
  })
})
