import '@testing-library/jest-dom'

import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect,it } from 'vitest'

import { Grid } from '..'

describe('Grid (basic)', () => {
  it('renders children', () => {
    render(
      <Grid>
        <span data-testid="child">hi</span>
      </Grid>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('renders as div by default and adds the prefixed class', () => {
    render(<Grid tagAttrs={{ 'data-testid': 'elem' }}>x</Grid>)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
    expect(el.className).toMatch(/neb-?grid/)
  })

  it('respects tag and merges tagAttrs.className', () => {
    render(
      <Grid tag="section" tagAttrs={{ 'data-testid': 'elem', className: 'extra' }}>
        x
      </Grid>
    )
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('section')
    expect(el.className).toContain('extra')
    expect(el.className).toMatch(/neb-?grid/)
  })

  it('forwards tagRef', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Grid tagRef={ref}>
        <div />
      </Grid>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
