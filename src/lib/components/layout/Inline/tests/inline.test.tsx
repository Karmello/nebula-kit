import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix, getDataAttrs, getCssVars } from 'lib-2/helpers'
import { Inline } from '..'

// Helper: Inline renders a Flex; locate the Flex root via its real prefixed class
function getFlexRoot(container: HTMLElement) {
  const cls = withPrefix('flex')
  const el = container.querySelector<HTMLElement>(`.${cls}`)
  if (!el) throw new Error(`Flex root not found (class: ${cls})`)
  return el
}

describe('<Inline /> (real components + helpers)', () => {
  it('uses block display when block=true', () => {
    const { container } = render(<Inline block />)
    const root = getFlexRoot(container)
    expect(root).toHaveStyle('display: flex')
  })

  it('lets user-provided style override display and merges styles', () => {
    const { container } = render(<Inline block style={{ display: 'inline-block', opacity: 0.6 }} />)
    const root = getFlexRoot(container)
    // user style wins even though block=true sets display: flex first
    expect(root).toHaveStyle('display: inline-block')
    expect(root).toHaveStyle('opacity: 0.6')
  })

  it('accepts string gap (e.g., 1rem) and sets CSS vars accordingly', () => {
    const { container } = render(<Inline gap="1rem" />)
    const root = getFlexRoot(container)

    const expectedVars = getCssVars('flex', { gap: '1rem' })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('respects polymorphic `as` and forwards DOM props + children', () => {
    const { container, getByText } = render(
      <Inline as="ul" id="list" role="list" data-foo="bar" style={{ gap: 0 }}>
        <li>one</li>
        <li>two</li>
      </Inline>
    )
    const root = getFlexRoot(container)

    expect(root.tagName.toLowerCase()).toBe('ul')
    expect(root).toHaveAttribute('id', 'list')
    expect(root).toHaveAttribute('role', 'list')
    expect(root).toHaveAttribute('data-foo', 'bar')
    expect(getByText('one')).toBeInTheDocument()
    expect(getByText('two')).toBeInTheDocument()
  })

  it('composes class names when className is provided (from rest)', () => {
    const { container } = render(<Inline className="extra" />)
    const root = getFlexRoot(container)
    expect(root.classList.contains(withPrefix('flex'))).toBe(true)
    expect(root.classList.contains('extra')).toBe(true)
  })
})
