import { createRef } from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { withPrefix } from 'lib/helpers'
import { Button } from '../'

// Helper: find the Button root element (Box rendered as <button>) via real prefixed class
function getButtonRoot(container: HTMLElement) {
  const cls = withPrefix('btn')
  const el = container.querySelector<HTMLButtonElement>(`.${cls}`)
  if (!el) throw new Error(`Button root not found (class: ${cls})`)
  return el
}

describe('<Button /> (real components + system helpers)', () => {
  it('renders as a <button> with default type="button" and prefixed class + user class', () => {
    const { container } = render(<Button className="extra">Click</Button>)
    const root = getButtonRoot(container)

    expect(root.tagName.toLowerCase()).toBe('button')
    expect(root).toHaveAttribute('type', 'button')
    expect(root.classList.contains(withPrefix('btn'))).toBe(true)
    expect(root.classList.contains('extra')).toBe(true)
  })

  it('overrides type, forwards disabled/variant/intent, and keeps interactive data attr', () => {
    const { container } = render(
      <Button type="submit" disabled variant="solid" intent="primary">
        Save
      </Button>
    )
    const root = getButtonRoot(container)

    // native attrs
    expect(root).toHaveAttribute('type', 'submit')
    expect(root).toBeDisabled()

    // data-* from real getDataAttrs (Box typically emits these)
    expect(root).toHaveAttribute('data-box-variant', 'solid')
    expect(root).toHaveAttribute('data-box-intent', 'primary')
    // Button sets interactive (boolean) on Box
    expect(root).toHaveAttribute('data-box-interactive', 'true')
    // disabled also appears as data attr via helpers
    expect(root).toHaveAttribute('data-box-disabled', 'true')
  })

  it('sets data-square=true when no children (icon-only or empty), else false', () => {
    // no children
    const { container, rerender } = render(<Button />)
    let root = getButtonRoot(container)
    expect(root).toHaveAttribute('data-btn-square', 'true')

    // icon-only still counts as "square" (no children text)
    rerender(<Button iconName="search" />)
    root = getButtonRoot(container)
    expect(root).toHaveAttribute('data-btn-square', 'true')

    // with children -> not square
    rerender(<Button iconName="search">Star</Button>)
    root = getButtonRoot(container)
    expect(root).toHaveAttribute('data-btn-square', 'false')
  })

  it('respects size prop without breaking semantics (sm, md, lg)', () => {
    // We don’t assert Box internals; we check that it still renders as a button and keeps class
    const { container, rerender } = render(<Button size="sm">S</Button>)
    let root = getButtonRoot(container)
    expect(root.tagName.toLowerCase()).toBe('button')

    rerender(<Button size="md">M</Button>)
    root = getButtonRoot(container)
    expect(root.tagName.toLowerCase()).toBe('button')

    rerender(<Button size="lg">L</Button>)
    root = getButtonRoot(container)
    expect(root.tagName.toLowerCase()).toBe('button')
  })

  it('forwards arbitrary DOM props and events', () => {
    const onClick = jest.fn()
    const { container, getByText } = render(
      <Button id="btn1" role="button" data-foo="bar" aria-label="primary" onClick={onClick}>
        Hit
      </Button>
    )
    const root = getButtonRoot(container)

    expect(root).toHaveAttribute('id', 'btn1')
    expect(root).toHaveAttribute('role', 'button') // role is redundant for button, but should pass through
    expect(root).toHaveAttribute('data-foo', 'bar')
    expect(root).toHaveAttribute('aria-label', 'primary')
    expect(getByText('Hit')).toBeInTheDocument()

    fireEvent.click(root)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('forwards ref to the underlying <button>', () => {
    const ref = createRef<HTMLButtonElement>()
    const { container } = render(<Button ref={ref}>Ref</Button>)
    const root = getButtonRoot(container)

    expect(ref.current).toBe(root)
    expect(ref.current?.tagName.toLowerCase()).toBe('button')
  })

  it('composes class names when className is falsy', () => {
    const { container } = render(<Button className={undefined}>X</Button>)
    const root = getButtonRoot(container)
    expect(root.classList.contains(withPrefix('btn'))).toBe(true)
  })
})
