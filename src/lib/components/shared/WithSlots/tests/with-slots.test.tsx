import { render } from '@testing-library/react'
import { describe, expect,it } from 'vitest'

import { WithSlots } from '../with-slots'

const Slot = () => <div>Component.Slot</div>
Slot.displayName = 'Component.Slot'

const NotASlot = () => <div>not a slot</div>

const Component = {
  Slot,
}

describe('WithSlots', () => {
  it('Registers a recognized slot child', () => {
    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: false,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={<Component.Slot />}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(Object.keys(slotsByName)).toEqual(['Component.Slot'])

          expect(slotsByName['Component.Slot']).toHaveLength(1)

          expect(allValidSlots).toHaveLength(1)

          expect(allNonSlots).toHaveLength(0)

          expect(slotsByName['Component.Slot'][0]).toBe(allValidSlots[0])

          return null
        }}
      </WithSlots>
    )
  })

  it('Preserves non-slot children when no required slots exist', () => {
    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: false,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={['hello', <NotASlot key="1" />, <Component.Slot key="2" />, 123]}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Slot']).toHaveLength(1)

          expect(allValidSlots).toHaveLength(1)

          expect(allNonSlots).toHaveLength(3)

          expect(allNonSlots[0]).toBe('hello')
          expect(allNonSlots[2]).toBe(123)

          return null
        }}
      </WithSlots>
    )
  })

  it('Ignores non-slot children when at least one required slot exists', () => {
    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: true,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={['hello', <NotASlot key="1" />, <Component.Slot key="2" />, 123]}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Slot']).toHaveLength(1)

          expect(allValidSlots).toHaveLength(1)

          expect(allNonSlots).toHaveLength(0)

          return null
        }}
      </WithSlots>
    )
  })

  it('Keeps only the last slot instance when allowMultiple is false', () => {
    const firstSlot = <Component.Slot key="first" />
    const secondSlot = <Component.Slot key="second" />

    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: false,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={[firstSlot, secondSlot]}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Slot']).toHaveLength(1)
          expect(slotsByName['Component.Slot'][0]).toBe(secondSlot)

          expect(allValidSlots).toHaveLength(2)
          expect(allValidSlots[0]).toBe(firstSlot)
          expect(allValidSlots[1]).toBe(secondSlot)

          expect(allNonSlots).toHaveLength(0)

          return null
        }}
      </WithSlots>
    )
  })

  it('Accumulates all slot instances when allowMultiple is true', () => {
    const firstSlot = <Component.Slot key="first" />
    const secondSlot = <Component.Slot key="second" />
    const thirdSlot = <Component.Slot key="third" />

    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: false,
            allowMultiple: true,
          },
        ]}
        childrenToVerify={[firstSlot, secondSlot, thirdSlot]}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Slot']).toHaveLength(3)

          expect(slotsByName['Component.Slot'][0]).toBe(firstSlot)
          expect(slotsByName['Component.Slot'][1]).toBe(secondSlot)
          expect(slotsByName['Component.Slot'][2]).toBe(thirdSlot)

          expect(allValidSlots).toHaveLength(3)

          expect(allNonSlots).toHaveLength(0)

          return null
        }}
      </WithSlots>
    )
  })

  it('Resolves slot children wrapped in a Fragment', () => {
    const firstSlot = <Component.Slot key="first" />
    const secondSlot = <Component.Slot key="second" />

    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: false,
            allowMultiple: true,
          },
        ]}
        childrenToVerify={
          <>
            {firstSlot}
            {secondSlot}
          </>
        }
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Slot']).toHaveLength(2)

          expect(slotsByName['Component.Slot'][0]).toBe(firstSlot)
          expect(slotsByName['Component.Slot'][1]).toBe(secondSlot)

          expect(allValidSlots).toHaveLength(2)

          expect(allNonSlots).toHaveLength(0)

          return null
        }}
      </WithSlots>
    )
  })

  it('Treats React elements without displayName as non-slot children in optional mode', () => {
    const unknownElement = <NotASlot />

    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: false,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={[unknownElement, <Component.Slot key="slot" />]}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Slot']).toHaveLength(1)

          expect(allValidSlots).toHaveLength(1)

          expect(allNonSlots).toHaveLength(1)
          expect(allNonSlots[0]).toBe(unknownElement)

          return null
        }}
      </WithSlots>
    )
  })

  it('Ignores React elements without displayName in strict mode', () => {
    const unknownElement = <NotASlot />

    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: true,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={[unknownElement, <Component.Slot key="slot" />]}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Slot']).toHaveLength(1)

          expect(allValidSlots).toHaveLength(1)

          expect(allNonSlots).toHaveLength(0)

          return null
        }}
      </WithSlots>
    )
  })

  it('Registers multiple different slot types independently', () => {
    const HeaderSlot = () => <div>header</div>
    HeaderSlot.displayName = 'Component.Header'

    const FooterSlot = () => <div>footer</div>
    FooterSlot.displayName = 'Component.Footer'

    render(
      <WithSlots<'Component.Header' | 'Component.Footer'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Header',
            required: false,
            allowMultiple: false,
          },
          {
            name: 'Component.Footer',
            required: false,
            allowMultiple: true,
          },
        ]}
        childrenToVerify={[<HeaderSlot key="header" />, <FooterSlot key="footer-1" />, <FooterSlot key="footer-2" />]}
      >
        {({ slotsByName, allValidSlots, allNonSlots }) => {
          expect(slotsByName['Component.Header']).toHaveLength(1)

          expect(slotsByName['Component.Footer']).toHaveLength(2)

          expect(allValidSlots).toHaveLength(3)

          expect(allNonSlots).toHaveLength(0)

          return null
        }}
      </WithSlots>
    )
  })

  it('Warns when a required slot is missing', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: true,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={<NotASlot />}
      >
        {() => null}
      </WithSlots>
    )

    expect(warnSpy).toHaveBeenCalledTimes(1)

    expect(warnSpy.mock.calls[0]?.[0]).toContain('Component expects Component.Slot to be its child')

    warnSpy.mockRestore()
  })

  it('Warns when someRequired is enabled and no valid slots exist', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <WithSlots<'Component.Header' | 'Component.Footer'>
        componentName="Component"
        someRequired
        slotsConfig={[
          {
            name: 'Component.Header',
            required: false,
            allowMultiple: false,
          },
          {
            name: 'Component.Footer',
            required: false,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={<NotASlot />}
      >
        {() => null}
      </WithSlots>
    )

    expect(warnSpy).toHaveBeenCalledTimes(1)

    expect(warnSpy.mock.calls[0]?.[0]).toContain('Component expects Component.Header or Component.Footer to be its child')

    warnSpy.mockRestore()
  })

  it('Returns null when childrenToVerify is not provided', () => {
    const childrenSpy = vi.fn()

    const { container } = render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: false,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={undefined}
      >
        {childrenSpy}
      </WithSlots>
    )

    expect(childrenSpy).not.toHaveBeenCalled()

    expect(container.firstChild).toBeNull()
  })

  it('Does not warn when required slots are correctly provided', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <WithSlots<'Component.Slot'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Slot',
            required: true,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={<Component.Slot />}
      >
        {() => null}
      </WithSlots>
    )

    expect(warnSpy).not.toHaveBeenCalled()

    warnSpy.mockRestore()
  })

  it('Warns only once when someRequired fails even if required slots also fail', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    render(
      <WithSlots<'Component.Header' | 'Component.Footer'>
        componentName="Component"
        someRequired
        slotsConfig={[
          {
            name: 'Component.Header',
            required: true,
            allowMultiple: false,
          },
          {
            name: 'Component.Footer',
            required: true,
            allowMultiple: false,
          },
        ]}
        childrenToVerify={<NotASlot />}
      >
        {() => null}
      </WithSlots>
    )

    expect(warnSpy).toHaveBeenCalledTimes(1)

    expect(warnSpy.mock.calls[0]?.[0]).toContain('Component expects Component.Header or Component.Footer to be its child')

    warnSpy.mockRestore()
  })

  it('Initializes empty arrays for slots that were not provided', () => {
    const HeaderSlot = () => <div>header</div>
    HeaderSlot.displayName = 'Component.Header'

    const FooterSlot = () => <div>footer</div>
    FooterSlot.displayName = 'Component.Footer'

    render(
      <WithSlots<'Component.Header' | 'Component.Footer'>
        componentName="Component"
        slotsConfig={[
          {
            name: 'Component.Header',
            required: false,
            allowMultiple: false,
          },
          {
            name: 'Component.Footer',
            required: false,
            allowMultiple: true,
          },
        ]}
        childrenToVerify={<HeaderSlot />}
      >
        {({ slotsByName }) => {
          expect(slotsByName['Component.Header']).toHaveLength(1)

          expect(slotsByName['Component.Footer']).toEqual([])

          return null
        }}
      </WithSlots>
    )
  })
})
