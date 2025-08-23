import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix, getCssVars } from 'lib/helpers'
import { VStack } from '..'

// Helper: Stack renders Flex, so locate the Flex root by its real prefixed class
function getFlexRoot(container: HTMLElement) {
  const cls = withPrefix('flex')
  const el = container.querySelector<HTMLElement>(`.${cls}`)
  if (!el) throw new Error(`Flex root not found (class: ${cls})`)
  return el
}

describe('<VStack /> (real components + helpers)', () => {
  it('composes class names: includes Flex prefix and user className (passed through Stack)', () => {
    const { container } = render(<VStack className="extra">c</VStack>)
    const root = getFlexRoot(container)
    expect(root.classList.contains(withPrefix('flex'))).toBe(true)
    expect(root.classList.contains('extra')).toBe(true)
  })

  it('applies gap as CSS custom properties when provided (number -> var(--neb-scale-X))', () => {
    const { container } = render(<VStack gap={6}>g</VStack>)
    const root = getFlexRoot(container)

    const expectedVars = getCssVars('flex', { gap: 6 })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('supports string gap values (e.g., "1rem")', () => {
    const { container } = render(<VStack gap="1rem" />)
    const root = getFlexRoot(container)

    const expectedVars = getCssVars('flex', { gap: '1rem' })
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('respects polymorphic `as` and forwards DOM props + children', () => {
    const { container, getByText } = render(
      <VStack as="section" id="vs1" role="region" data-foo="bar" style={{ opacity: 0.4 }}>
        content
      </VStack>
    )
    const root = getFlexRoot(container)

    expect(root.tagName.toLowerCase()).toBe('section')
    expect(root).toHaveAttribute('id', 'vs1')
    expect(root).toHaveAttribute('role', 'region')
    expect(root).toHaveAttribute('data-foo', 'bar')
    expect(root).toHaveStyle('opacity: 0.4')
    expect(getByText('content')).toBeInTheDocument()
  })

  it('still renders when className is falsy', () => {
    const { container } = render(<VStack className={undefined} />)
    const root = getFlexRoot(container)
    expect(root.classList.contains(withPrefix('flex'))).toBe(true)
  })
})
