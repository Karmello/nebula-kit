import { createRef } from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

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
    render(<Grid elemProps={{ 'data-testid': 'elem' }}>x</Grid>)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
    expect(el.className).toMatch(/neb-?grid/)
  })

  it('respects elem and merges elemProps.className', () => {
    render(
      <Grid elem="section" elemProps={{ 'data-testid': 'elem', className: 'extra' }}>
        x
      </Grid>
    )
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('section')
    expect(el.className).toContain('extra')
    expect(el.className).toMatch(/neb-?grid/)
  })

  it('forwards elemRef', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Grid elemRef={ref}>
        <div />
      </Grid>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
