import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix, getDataAttrs, getCssVars } from 'lib-2/helpers'
import { HStack } from '..'

// Helper: get the Flex root rendered by HStack via real prefixed class
function getFlexRoot(container: HTMLElement) {
  const cls = withPrefix('flex')
  const el = container.querySelector<HTMLElement>(`.${cls}`)
  if (!el) throw new Error(`Flex root not found (class: ${cls})`)
  return el
}

describe('<HStack /> (real components + helpers)', () => {
  it('applies gap as CSS custom properties when provided (number -> var(--scale-X))', () => {
    const { container } = render(<HStack gap={6}>g</HStack>)
    const root = getFlexRoot(container)

    const expectedVars = getCssVars('flex', { gap: 6 })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('supports string gap values (e.g., "1rem")', () => {
    const { container } = render(<HStack gap="1rem" />)
    const root = getFlexRoot(container)

    const expectedVars = getCssVars('flex', { gap: '1rem' })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('composes class names: includes Flex prefix and user className from props', () => {
    const { container } = render(<HStack className="extra">c</HStack>)
    const root = getFlexRoot(container)
    expect(root.classList.contains(withPrefix('flex'))).toBe(true)
    expect(root.classList.contains('extra')).toBe(true)
  })

  it('respects polymorphic `as` and forwards DOM props + children', () => {
    const { container, getByText } = render(
      <HStack as="section" id="hs1" role="region" data-foo="bar">
        content
      </HStack>
    )
    const root = getFlexRoot(container)

    expect(root.tagName.toLowerCase()).toBe('section')
    expect(root).toHaveAttribute('id', 'hs1')
    expect(root).toHaveAttribute('role', 'region')
    expect(root).toHaveAttribute('data-foo', 'bar')
    expect(getByText('content')).toBeInTheDocument()
  })

  it('still renders when className is falsy', () => {
    const { container } = render(<HStack className={undefined} />)
    const root = getFlexRoot(container)
    expect(root.classList.contains(withPrefix('flex'))).toBe(true)
  })
})
