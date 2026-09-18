import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useSlots } from './use-slots'

const Slot = () => <div>Component.Slot</div>
Slot.displayName = 'Component.Slot'

const NotASlot = () => <div>not a slot</div>

const Component = {
  Slot,
}

describe('useSlots', () => {
  it('Registers a recognized slot child', () => {
    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: false, allowMultiple: false }],
        childrenToVerify: <Component.Slot />,
      })
    )

    const resolved = result.current!

    expect(Object.keys(resolved.slotsByName)).toEqual(['Component.Slot'])

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(1)

    expect(resolved.allValidSlots).toHaveLength(1)

    expect(resolved.allNonSlots).toHaveLength(0)

    expect(resolved.slotsByName['Component.Slot'][0]).toBe(resolved.allValidSlots[0])
  })

  it('Preserves non-slot children when no required slots exist', () => {
    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: false, allowMultiple: false }],
        childrenToVerify: ['hello', <NotASlot key="1" />, <Component.Slot key="2" />, 123],
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(1)

    expect(resolved.allValidSlots).toHaveLength(1)

    expect(resolved.allNonSlots).toHaveLength(3)

    expect(resolved.allNonSlots[0]).toBe('hello')
    expect(resolved.allNonSlots[2]).toBe(123)
  })

  it('Ignores non-slot children when at least one required slot exists', () => {
    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: true, allowMultiple: false }],
        childrenToVerify: ['hello', <NotASlot key="1" />, <Component.Slot key="2" />, 123],
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(1)

    expect(resolved.allValidSlots).toHaveLength(1)

    expect(resolved.allNonSlots).toHaveLength(0)
  })

  it('Keeps only the last slot instance when allowMultiple is false', () => {
    const firstSlot = <Component.Slot key="first" />
    const secondSlot = <Component.Slot key="second" />

    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: false, allowMultiple: false }],
        childrenToVerify: [firstSlot, secondSlot],
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(1)
    expect(resolved.slotsByName['Component.Slot'][0]).toBe(secondSlot)

    expect(resolved.allValidSlots).toHaveLength(2)
    expect(resolved.allValidSlots[0]).toBe(firstSlot)
    expect(resolved.allValidSlots[1]).toBe(secondSlot)

    expect(resolved.allNonSlots).toHaveLength(0)
  })

  it('Accumulates all slot instances when allowMultiple is true', () => {
    const firstSlot = <Component.Slot key="first" />
    const secondSlot = <Component.Slot key="second" />
    const thirdSlot = <Component.Slot key="third" />

    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: false, allowMultiple: true }],
        childrenToVerify: [firstSlot, secondSlot, thirdSlot],
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(3)

    expect(resolved.slotsByName['Component.Slot'][0]).toBe(firstSlot)
    expect(resolved.slotsByName['Component.Slot'][1]).toBe(secondSlot)
    expect(resolved.slotsByName['Component.Slot'][2]).toBe(thirdSlot)

    expect(resolved.allValidSlots).toHaveLength(3)

    expect(resolved.allNonSlots).toHaveLength(0)
  })

  it('Resolves slot children wrapped in a Fragment', () => {
    const firstSlot = <Component.Slot key="first" />
    const secondSlot = <Component.Slot key="second" />

    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: false, allowMultiple: true }],
        childrenToVerify: (
          <>
            {firstSlot}
            {secondSlot}
          </>
        ),
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(2)

    expect(resolved.slotsByName['Component.Slot'][0]).toBe(firstSlot)
    expect(resolved.slotsByName['Component.Slot'][1]).toBe(secondSlot)

    expect(resolved.allValidSlots).toHaveLength(2)

    expect(resolved.allNonSlots).toHaveLength(0)
  })

  it('Treats React elements without displayName as non-slot children in optional mode', () => {
    const unknownElement = <NotASlot />

    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: false, allowMultiple: false }],
        childrenToVerify: [unknownElement, <Component.Slot key="slot" />],
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(1)

    expect(resolved.allValidSlots).toHaveLength(1)

    expect(resolved.allNonSlots).toHaveLength(1)
    expect(resolved.allNonSlots[0]).toBe(unknownElement)
  })

  it('Ignores React elements without displayName in strict mode', () => {
    const unknownElement = <NotASlot />

    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: true, allowMultiple: false }],
        childrenToVerify: [unknownElement, <Component.Slot key="slot" />],
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Slot']).toHaveLength(1)

    expect(resolved.allValidSlots).toHaveLength(1)

    expect(resolved.allNonSlots).toHaveLength(0)
  })

  it('Registers multiple different slot types independently', () => {
    const HeaderSlot = () => <div>header</div>
    HeaderSlot.displayName = 'Component.Header'

    const FooterSlot = () => <div>footer</div>
    FooterSlot.displayName = 'Component.Footer'

    const { result } = renderHook(() =>
      useSlots<'Component.Header' | 'Component.Footer'>({
        componentName: 'Component',
        slotsConfig: [
          { name: 'Component.Header', required: false, allowMultiple: false },
          { name: 'Component.Footer', required: false, allowMultiple: true },
        ],
        childrenToVerify: [
          <HeaderSlot key="header" />,
          <FooterSlot key="footer-1" />,
          <FooterSlot key="footer-2" />,
        ],
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Header']).toHaveLength(1)

    expect(resolved.slotsByName['Component.Footer']).toHaveLength(2)

    expect(resolved.allValidSlots).toHaveLength(3)

    expect(resolved.allNonSlots).toHaveLength(0)
  })

  it('Warns when a required slot is missing', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: true, allowMultiple: false }],
        childrenToVerify: <NotASlot />,
      })
    )

    expect(warnSpy).toHaveBeenCalledTimes(1)

    expect(warnSpy.mock.calls[0]?.[0]).toContain('Component expects Component.Slot to be its child')

    warnSpy.mockRestore()
  })

  it('Warns when someRequired is enabled and no valid slots exist', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    renderHook(() =>
      useSlots<'Component.Header' | 'Component.Footer'>({
        componentName: 'Component',
        someRequired: true,
        slotsConfig: [
          { name: 'Component.Header', required: false, allowMultiple: false },
          { name: 'Component.Footer', required: false, allowMultiple: false },
        ],
        childrenToVerify: <NotASlot />,
      })
    )

    expect(warnSpy).toHaveBeenCalledTimes(1)

    expect(warnSpy.mock.calls[0]?.[0]).toContain(
      'Component expects Component.Header or Component.Footer to be its child'
    )

    warnSpy.mockRestore()
  })

  it('Returns null when childrenToVerify is not provided', () => {
    const { result } = renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: false, allowMultiple: false }],
        childrenToVerify: undefined,
      })
    )

    expect(result.current).toBeNull()
  })

  it('Does not warn when required slots are correctly provided', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    renderHook(() =>
      useSlots<'Component.Slot'>({
        componentName: 'Component',
        slotsConfig: [{ name: 'Component.Slot', required: true, allowMultiple: false }],
        childrenToVerify: <Component.Slot />,
      })
    )

    expect(warnSpy).not.toHaveBeenCalled()

    warnSpy.mockRestore()
  })

  it('Warns only once when someRequired fails even if required slots also fail', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    renderHook(() =>
      useSlots<'Component.Header' | 'Component.Footer'>({
        componentName: 'Component',
        someRequired: true,
        slotsConfig: [
          { name: 'Component.Header', required: true, allowMultiple: false },
          { name: 'Component.Footer', required: true, allowMultiple: false },
        ],
        childrenToVerify: <NotASlot />,
      })
    )

    expect(warnSpy).toHaveBeenCalledTimes(1)

    expect(warnSpy.mock.calls[0]?.[0]).toContain(
      'Component expects Component.Header or Component.Footer to be its child'
    )

    warnSpy.mockRestore()
  })

  it('Initializes empty arrays for slots that were not provided', () => {
    const HeaderSlot = () => <div>header</div>
    HeaderSlot.displayName = 'Component.Header'

    const FooterSlot = () => <div>footer</div>
    FooterSlot.displayName = 'Component.Footer'

    const { result } = renderHook(() =>
      useSlots<'Component.Header' | 'Component.Footer'>({
        componentName: 'Component',
        slotsConfig: [
          { name: 'Component.Header', required: false, allowMultiple: false },
          { name: 'Component.Footer', required: false, allowMultiple: true },
        ],
        childrenToVerify: <HeaderSlot />,
      })
    )

    const resolved = result.current!

    expect(resolved.slotsByName['Component.Header']).toHaveLength(1)

    expect(resolved.slotsByName['Component.Footer']).toEqual([])
  })
})
