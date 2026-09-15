import { useRef } from 'react'
import { render, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useFocusTrap } from './use-focus-trap'

describe('useFocusTrap', () => {
  it('adds tabindex to target when active and removes it on deactivate', () => {
    const ref = { current: document.createElement('div') }
    document.body.appendChild(ref.current)

    const { rerender } = renderHook(({ active }) => useFocusTrap({ ref, active }), {
      initialProps: { active: true },
    })

    expect(ref.current.hasAttribute('tabindex')).toBe(true)

    rerender({ active: false })

    expect(ref.current.hasAttribute('tabindex')).toBe(false)
  })

  it('calls onFocusEscape on Escape key', () => {
    const ref = { current: document.createElement('div') }
    const onEscape = vi.fn()

    renderHook(() => useFocusTrap({ ref, active: true, onFocusEscape: onEscape }))

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(onEscape).toHaveBeenCalled()
  })

  const Harness = ({
    disableEscapeOnOutsideClick,
    onEscape,
  }: {
    disableEscapeOnOutsideClick: boolean
    onEscape: () => void
  }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useFocusTrap({
      ref,
      active: true,
      onFocusEscape: onEscape,
      disableEscapeOnOutsideClick,
    })

    return (
      <div>
        <div ref={ref}>inside</div>
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
