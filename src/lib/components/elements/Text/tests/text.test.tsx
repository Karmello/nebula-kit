import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix, getDataAttrs } from 'lib/helpers'
import { Text } from '..'

/**
 * Helper: find the Text's root element (the Box) by its prefixed class.
 * Works regardless of how Box structures its children.
 */
function getTextRoot(container: HTMLElement) {
  const cls = withPrefix('text')
  const node = container.querySelector<HTMLElement>(`.${cls}`)
  if (!node) {
    throw new Error(`Could not find element with class "${cls}"`)
  }
  return node
}

describe('<Text /> (real Box + system helpers)', () => {
  it('adds the prefixed class and composes user className', () => {
    const { container, getByText } = render(<Text className="extra">hello</Text>)
    // Ensure content present
    expect(getByText('hello')).toBeInTheDocument()

    const root = getTextRoot(container)
    expect(root.classList.contains(withPrefix('text'))).toBe(true)
    expect(root.classList.contains('extra')).toBe(true)
  })

  it('renders the correct element from typography by default (e.g., h3)', () => {
    const { container, getByText } = render(<Text typography="h3">Heading</Text>)
    const root = getTextRoot(container)
    // Box should render as <h3> for typography="h3" unless explicitly overridden
    expect(root.tagName.toLowerCase()).toBe('h3')
    expect(getByText('Heading')).toBeInTheDocument()
  })

  it('allows overriding the element via `as` prop', () => {
    const { container } = render(
      <Text as="span" typography="h3">
        span text
      </Text>
    )
    const root = getTextRoot(container)
    expect(root.tagName.toLowerCase()).toBe('span')
  })

  it('applies clampLines styles when > 0', () => {
    const { container } = render(<Text clampLines={3}>clamped</Text>)
    const root = getTextRoot(container)
    // Style checks are tolerant of how Box merges style objects.
    expect(root).toHaveStyle('display: -webkit-box')
    expect(root.style.WebkitLineClamp).toBe('3')
    expect(root.style.WebkitBoxOrient).toBe('vertical')
    expect(root).toHaveStyle('overflow: hidden')
  })

  it('does not apply clamp styles for 0/undefined', () => {
    const { container } = render(<Text clampLines={0}>no clamp</Text>)
    const root = getTextRoot(container)
    expect(root).not.toHaveStyle('display: -webkit-box')
    expect(root).not.toHaveStyle('-webkit-line-clamp: 0')
  })

  it('applies noWrap styles', () => {
    const { container } = render(<Text noWrap>nowrap</Text>)
    const root = getTextRoot(container)
    expect(root).toHaveStyle('white-space: nowrap')
  })

  it('applies truncate styles and merges with user styles (user wins on conflict)', () => {
    const { container } = render(
      <Text truncate style={{ whiteSpace: 'normal', textOverflow: 'clip' }}>
        truncated
      </Text>
    )
    const root = getTextRoot(container)
    // User overrides should win
    expect(root).toHaveStyle('white-space: normal')
    expect(root).toHaveStyle('text-overflow: clip')
    // But overflow: hidden from truncate remains unless explicitly overridden
    expect(root).toHaveStyle('overflow: hidden')
  })

  it('adds data attributes via real getDataAttrs for typography', () => {
    const typography = 'lead' as const
    const { container } = render(<Text typography={typography}>x</Text>)
    const root = getTextRoot(container)

    // Use the real helper to compute expected data-* keys/values
    const expected = getDataAttrs('text', { typography })
    for (const [key, val] of Object.entries(expected)) {
      expect(root).toHaveAttribute(key, String(val))
    }
  })

  it('forwards arbitrary DOM props to Box and does not leak Text-only props', () => {
    const { container, getByText } = render(
      <Text
        data-foo="bar"
        typography="body"
        noWrap
        truncate
        clampLines={2}
        iconName="search"
        iconPosition="left"
      >
        content
      </Text>
    )
    const root = getTextRoot(container)
    expect(getByText('content')).toBeInTheDocument()

    // forwarded DOM props
    expect(root).toHaveAttribute('data-foo', 'bar')

    // these should be consumed by Text/Box and not leak to DOM
    expect(root).not.toHaveAttribute('typography')
    expect(root).not.toHaveAttribute('noWrap')
    expect(root).not.toHaveAttribute('truncate')
    expect(root).not.toHaveAttribute('clampLines')
    expect(root).not.toHaveAttribute('iconName')
    expect(root).not.toHaveAttribute('iconPosition')
  })

  it('still composes class names when className is falsy', () => {
    const { container } = render(<Text className={undefined}>x</Text>)
    const root = getTextRoot(container)
    expect(root.classList.contains(withPrefix('text'))).toBe(true)
  })
})
