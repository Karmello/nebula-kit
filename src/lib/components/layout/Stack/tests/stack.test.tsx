import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix, getDataAttrs, getCssVars } from 'lib/helpers'
import { Stack } from '..'

// Helper: find the Flex root by its real prefixed class (Stack renders Flex)
function getFlexRoot(container: HTMLElement) {
  const cls = withPrefix('flex')
  const el = container.querySelector<HTMLElement>(`.${cls}`)
  if (!el) throw new Error(`Flex root not found (class: ${cls})`)
  return el
}

describe('<Stack /> (real components + helpers)', () => {
  it('passes rowGap/columnGap through to CSS vars', () => {
    const vars = { gap: 2, rowGap: '1rem', columnGap: 6 } as const
    const { container } = render(<Stack {...vars}>x</Stack>)
    const root = getFlexRoot(container)

    const expectedVars = getCssVars('flex', vars)
    for (const [cssVar, val] of Object.entries(expectedVars)) {
      expect(root.style.getPropertyValue(cssVar)).toBe(String(val))
    }
  })

  it('respects polymorphic `as` and forwards DOM props + children', () => {
    const { container, getByText } = render(
      <Stack as="section" id="s1" role="region" data-foo="bar" style={{ opacity: 0.5 }}>
        <span>child</span>
      </Stack>
    )
    const root = getFlexRoot(container)

    expect(root.tagName.toLowerCase()).toBe('section')
    expect(root).toHaveAttribute('id', 's1')
    expect(root).toHaveAttribute('role', 'region')
    expect(root).toHaveAttribute('data-foo', 'bar')
    expect(root).toHaveStyle('opacity: 0.5')
    expect(getByText('child')).toBeInTheDocument()
  })

  it('still renders when className is falsy', () => {
    const { container } = render(<Stack className={undefined} />)
    const root = getFlexRoot(container)
    expect(root.classList.contains(withPrefix('flex'))).toBe(true)
  })
})
