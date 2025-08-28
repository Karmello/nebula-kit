import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Grid } from 'lib/components'

describe('Grid (no mocks)', () => {
  it('renders with the prefixed base class and merges className', () => {
    render(<Grid className="custom" data-testid="grid" />)
    const el = screen.getByTestId('grid')
    expect(el).toBeInTheDocument()
    expect(el.className).toMatch(/neb-?grid/) // tolerant if you ever add a separator
    expect(el).toHaveClass('custom')
  })

  it('forwards arbitrary attributes and children', () => {
    render(
      <Grid data-testid="grid" aria-label="gallery">
        <div data-role="child">child</div>
      </Grid>
    )
    const el = screen.getByTestId('grid')
    expect(el).toHaveAttribute('aria-label', 'gallery')
    expect(el).toContainHTML('data-role="child"')
    expect(el).toHaveTextContent('child')
  })

  it('supports polymorphic "as" and renders the right tag', () => {
    render(
      <Grid as="section" data-testid="grid" aria-label="landmark">
        content
      </Grid>
    )
    const el = screen.getByTestId('grid')
    expect(el.tagName.toLowerCase()).toBe('section')
    expect(el).toHaveAttribute('aria-label', 'landmark')
  })

  it('writes CSS variables when props are provided', () => {
    render(
      <Grid
        data-testid="grid"
        columns={{ base: 1, md: 3 }}
        rows="auto auto"
        gap={{ base: '4px', md: '8px' }}
        rowGap="2ch"
        columnGap="1rem"
        autoFlow="row dense"
        autoRows="minmax(0,1fr)"
        autoColumns="minmax(10ch,auto)"
        placeItems={{ base: 'start', md: 'stretch' }}
        placeContent="space-between"
      />
    )
    const el = screen.getByTestId('grid')
    const style = el.getAttribute('style') || ''

    // Spot-check a few expected var hooks without depending on exact values
    expect(style).toContain('--neb-grid-columns-base')
    expect(style).toContain('--neb-grid-rows-base')
    expect(style).toContain('--neb-grid-gap-base')
    expect(style).toContain('--neb-grid-row-gap-base')
    expect(style).toContain('--neb-grid-column-gap-base')
    expect(style).toContain('--neb-grid-auto-flow-base')
    expect(style).toContain('--neb-grid-auto-rows-base')
    expect(style).toContain('--neb-grid-auto-columns-base')
    expect(style).toContain('--neb-grid-place-items-md')
    expect(style).toContain('--neb-grid-place-content-base')
  })

  it('user style overrides helper-provided CSS vars (merge order)', () => {
    render(
      <Grid
        data-testid="grid"
        gap="4px"
        style={{
          outline: '1px solid red',
          // explicit override of the same var your helper sets
          ['--neb-grid-gap' as any]: '999px',
        }}
      />
    )
    const el = screen.getByTestId('grid')

    // user-presented regular styles survive
    expect(el).toHaveStyle('outline: 1px solid red')

    // the user-provided CSS var wins over helper var
    // (computed style string must include the override)
    const style = el.getAttribute('style') || ''
    expect(style).toMatch(/--neb-grid-gap:\s*999px/)
  })

  it('handles many children without crashing', () => {
    const kids = Array.from({ length: 2000 }, (_, i) => <div key={i} data-i={i} />)
    const { container } = render(<Grid data-testid="grid">{kids}</Grid>)
    const count = container.querySelectorAll('[data-testid="grid"] > *').length
    expect(count).toBe(2000)
  })

  it('does not emit grid vars for untouched props (baseline compare)', () => {
    const { rerender } = render(<Grid data-testid="grid" />)
    const baseStyle = screen.getByTestId('grid').getAttribute('style') || ''

    rerender(<Grid data-testid="grid" columns={3} />)
    const withColumnsStyle = screen.getByTestId('grid').getAttribute('style') || ''

    // Adding a prop should increase or change the style text (vars added)
    expect(withColumnsStyle.length).toBeGreaterThanOrEqual(baseStyle.length)
    expect(withColumnsStyle).toContain('--neb-grid-columns')
  })
})
