import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix, getDataAttrs } from 'lib-2/helpers'
import { Center } from '..'

// Helper: Center renders a Flex; locate the Flex root via its real prefixed class
function getFlexRoot(container: HTMLElement) {
  const cls = withPrefix('flex')
  const el = container.querySelector<HTMLElement>(`.${cls}`)
  if (!el) throw new Error(`Flex root not found (class: ${cls})`)
  return el
}

describe('<Center /> (real components + helpers)', () => {
  it('applies fill styles when fill=true', () => {
    const { container } = render(<Center fill>fill</Center>)
    const root = getFlexRoot(container)
    expect(root).toHaveStyle('width: 100%')
    expect(root).toHaveStyle('height: 100%')
  })

  it('applies screen styles when screen=true', () => {
    const { container } = render(<Center screen>screen</Center>)
    const root = getFlexRoot(container)
    expect(root).toHaveStyle('width: 100%')
    expect(root).toHaveStyle('min-height: 100dvh')
  })

  it('applies grow styles when grow=true', () => {
    const { container } = render(<Center grow>grow</Center>)
    const root = getFlexRoot(container)
    expect(root).toHaveStyle('flex: 1 1 auto')
  })

  it('merges styles and lets user-provided style override generated ones', () => {
    const { container } = render(
      <Center
        fill
        screen
        grow
        style={{ width: '50%', height: '200px', minHeight: '80vh', flex: '0 0 auto', opacity: 0.4 }}
      >
        mixed
      </Center>
    )
    const root = getFlexRoot(container)
    // user overrides win
    expect(root).toHaveStyle('width: 50%')
    expect(root).toHaveStyle('height: 200px')
    expect(root).toHaveStyle('min-height: 80vh')
    expect(root).toHaveStyle('flex: 0 0 auto')
    // plus additional user style
    expect(root).toHaveStyle('opacity: 0.4')
  })

  it('respects polymorphic `as` and forwards DOM props + children', () => {
    const { container, getByText } = render(
      <Center as="section" id="c1" role="region" data-foo="bar">
        content
      </Center>
    )
    const root = getFlexRoot(container)
    expect(root.tagName.toLowerCase()).toBe('section')
    expect(root).toHaveAttribute('id', 'c1')
    expect(root).toHaveAttribute('role', 'region')
    expect(root).toHaveAttribute('data-foo', 'bar')
    expect(getByText('content')).toBeInTheDocument()
  })

  it('does not set fill/screen/grow styles when flags are falsy', () => {
    const { container } = render(<Center>plain</Center>)
    const root = getFlexRoot(container)
    // JSDOM returns '' for unset inline styles
    expect(root.style.width).toBe('')
    expect(root.style.height).toBe('')
    expect(root.style.minHeight).toBe('')
    expect(root.style.flex).toBe('')
  })
})
