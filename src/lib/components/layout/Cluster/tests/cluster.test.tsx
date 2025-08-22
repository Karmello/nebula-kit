import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix, getCssVars, getDataAttrs } from 'lib-2/helpers'
import { Cluster } from '..'

// Helper: find Cluster root via its own prefixed class
function getClusterRoot(container: HTMLElement) {
  const cls = withPrefix('cluster')
  const el = container.querySelector<HTMLElement>(`.${cls}`)
  if (!el) throw new Error(`Cluster root not found (class: ${cls})`)
  return el
}

describe('<Cluster /> (real components + helpers)', () => {
  it('composes class names when user className is provided', () => {
    const { container } = render(<Cluster className="extra" />)
    const root = getClusterRoot(container)
    expect(root.classList.contains(withPrefix('cluster'))).toBe(true)
    expect(root.classList.contains('extra')).toBe(true)
  })

  it('applies CSS vars for minItemWidth (number -> var(--scale-X))', () => {
    const { container } = render(<Cluster minItemWidth={12} />)
    const root = getClusterRoot(container)

    const expectedVars = getCssVars('cluster', { minItemWidth: 12 })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('applies CSS vars for string minItemWidth', () => {
    const { container } = render(<Cluster minItemWidth="14rem" />)
    const root = getClusterRoot(container)

    const expectedVars = getCssVars('cluster', { minItemWidth: '14rem' })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('supports responsive object for minItemWidth (base/md/xl etc.)', () => {
    const minItemWidth = { base: 10, md: '20rem', xl: 24 } as const
    const { container } = render(<Cluster minItemWidth={minItemWidth} />)
    const root = getClusterRoot(container)

    const expectedVars = getCssVars('cluster', { minItemWidth })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('merges style and lets user style override generated CSS vars', () => {
    const minItemWidth = 16
    const generated = getCssVars('cluster', { minItemWidth })
    const override: React.CSSProperties = { opacity: 0.5 }
    for (const cssVar of Object.keys(generated)) {
      // @ts-expect-error custom CSS var key added dynamically
      override[cssVar] = 'override'
    }

    const { container } = render(<Cluster minItemWidth={minItemWidth} style={override} />)
    const root = getClusterRoot(container)

    for (const cssVar of Object.keys(generated)) {
      expect(root.style.getPropertyValue(cssVar)).toBe('override')
    }
    expect(root).toHaveStyle('opacity: 0.5')
  })

  it('respects polymorphic `as` and forwards DOM props + children', () => {
    const { container, getByText } = render(
      <Cluster as="section" id="c1" role="region" data-foo="bar">
        <span>child</span>
      </Cluster>
    )
    const root = getClusterRoot(container)

    expect(root.tagName.toLowerCase()).toBe('section')
    expect(root).toHaveAttribute('id', 'c1')
    expect(root).toHaveAttribute('role', 'region')
    expect(root).toHaveAttribute('data-foo', 'bar')
    expect(getByText('child')).toBeInTheDocument()
  })

  it('still renders with only the prefixed class when className is falsy', () => {
    const { container } = render(<Cluster className={undefined} />)
    const root = getClusterRoot(container)
    expect(root.classList.contains(withPrefix('cluster'))).toBe(true)
  })
})
