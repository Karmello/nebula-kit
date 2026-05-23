import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FocusTrap } from '../FocusTrap'
import { useRef } from 'react'

describe('FocusTrap', () => {
  it('renders children', () => {
    const ref = { current: document.createElement('div') }

    render(
      <FocusTrap tagRef={ref} active={true}>
        <span>content</span>
      </FocusTrap>
    )

    expect(screen.getByText('content')).toBeTruthy()
  })

  it('adds tabindex to target when active and removes it on deactivate', () => {
    const ref = { current: document.createElement('div') }
    document.body.appendChild(ref.current)

    const { rerender } = render(
      <FocusTrap tagRef={ref} active={true}>
        <div />
      </FocusTrap>
    )

    expect(ref.current.hasAttribute('tabindex')).toBe(true)

    rerender(
      <FocusTrap tagRef={ref} active={false}>
        <div />
      </FocusTrap>
    )

    expect(ref.current.hasAttribute('tabindex')).toBe(false)
  })

  it('calls onFocusEscape on Escape key', () => {
    const ref = { current: document.createElement('div') }
    const onEscape = vi.fn()

    render(
      <FocusTrap tagRef={ref} active={true} onFocusEscape={onEscape}>
        <div />
      </FocusTrap>
    )

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(onEscape).toHaveBeenCalled()
  })

  const Harness = ({ disableEscapeOnOutsideClick, onEscape }: { disableEscapeOnOutsideClick: boolean; onEscape: () => void }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    return (
      <div>
        <FocusTrap tagRef={ref} active={true} onFocusEscape={onEscape} disableEscapeOnOutsideClick={disableEscapeOnOutsideClick}>
          <div ref={ref}>inside</div>
        </FocusTrap>

        {/* outside element */}
        <div data-testid="outside">outside</div>
      </div>
    )
  }

  it('calls onFocusEscape on outside click when enabled', () => {
    const onEscape = vi.fn()

    render(<Harness disableEscapeOnOutsideClick={false} onEscape={onEscape} />)

    document.dispatchEvent(
      new PointerEvent('pointerdown', {
        bubbles: true,
      })
    )

    expect(onEscape).toHaveBeenCalledTimes(1)
  })

  it('does not call onFocusEscape on outside click when disabled', () => {
    const onEscape = vi.fn()

    render(<Harness disableEscapeOnOutsideClick={true} onEscape={onEscape} />)

    document.dispatchEvent(
      new PointerEvent('pointerdown', {
        bubbles: true,
      })
    )

    expect(onEscape).not.toHaveBeenCalled()
  })
})
