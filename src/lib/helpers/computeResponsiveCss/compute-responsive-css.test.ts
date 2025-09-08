import { describe, it, expect } from 'vitest'

import { computeResponsiveCss } from '.'

type AnyProps = Record<string, any>

const makeRef = <T extends HTMLElement>(el: T | null) => ({ current: el }) as unknown as React.RefObject<T>

describe('computeResponsiveCss', () => {
  it('returns early (no crash) when ref.current is null', () => {
    const ref = makeRef<HTMLElement>(null)
    const props: AnyProps = { margin: { base: '2px', md: '8px' } }

    // Should not throw
    computeResponsiveCss(ref, 'md', props)
  })

  it('merges buckets from base up to the given breakpoint (base→sm)', () => {
    const el = document.createElement('div')
    const ref = makeRef(el)

    const props: AnyProps = {
      // primitive should only apply at base (selection is handled by getCssValuesPerBp)
      display: 'block',
      // ladder
      margin: { base: '2px', sm: '4px', md: '8px' },
      // sparse
      paddingTop: { base: '1rem', lg: '3rem' },
      // appears at md+; at sm it should not yet apply
      right: { md: '10px', xl: '20px' },
    }

    computeResponsiveCss(ref, 'sm', props)

    // After merging base+sm:
    expect(el.style.display).toBe('block') // base value persists through sm via mergedBucket
    expect(el.style.margin).toBe('4px') // base -> 2px, sm overrides -> 4px
    expect(el.style.paddingTop).toBe('1rem') // from base only
    expect(el.style.right).toBe('') // not reached yet at sm
  })

  it('merges buckets through md and lg, last-wins across the chain', () => {
    const el = document.createElement('div')
    const ref = makeRef(el)

    const props: AnyProps = {
      marginBlock: { base: '2px', sm: '4px', md: '8px', lg: '16px' },
      paddingTop: { base: '1rem', lg: '3rem', xl: '4rem' },
      right: { base: '0', md: '10px', xl: '20px' },
    }

    // Up to md
    computeResponsiveCss(ref, 'md', props)
    expect(el.style.marginBlock).toBe('8px') // md wins
    expect(el.style.paddingTop).toBe('1rem') // lg not reached yet
    expect(el.style.right).toBe('10px') // md wins

    // Up to lg (should override where provided)
    computeResponsiveCss(ref, 'lg', props)
    expect(el.style.marginBlock).toBe('16px') // lg wins
    expect(el.style.paddingTop).toBe('3rem') // now lg reached
    expect(el.style.right).toBe('10px') // no lg value, md remains last
  })

  it('applies the full chain up to xl and leaves unrelated inline styles untouched', () => {
    const el = document.createElement('div')
    // Seed an unrelated style that isn't listed in props — should remain unchanged.
    el.style.overflowY = 'scroll'

    const ref = makeRef(el)

    const props: AnyProps = {
      margin: { base: '2px', sm: '4px', md: '8px', lg: '16px', xl: '24px' },
      padding: { base: '1rem', xl: '4rem' },
      right: { base: '0', md: '10px', xl: '20px' },
    }

    computeResponsiveCss(ref, 'xl', props)

    expect(el.style.margin).toBe('24px') // xl wins
    expect(el.style.padding).toBe('4rem') // xl wins
    expect(el.style.right).toBe('20px') // xl wins

    // Not in props → should not be touched
    expect(el.style.overflowY).toBe('scroll')
  })

  it('clears any prop present in props before writing merged values; props with no merged value remain cleared', () => {
    const el = document.createElement('div')
    // Pre-populate styles to verify clearing happens
    el.style.paddingInline = '999px'
    el.style.marginTop = '777px'
    const ref = makeRef(el)

    const props: AnyProps = {
      // present in props but only has a value at md; for base call, it should be cleared and stay empty
      paddingInline: { md: '24px' },
      // present in props and has base value
      marginTop: { base: '12px' },
    }

    computeResponsiveCss(ref, 'base', props)

    // paddingInline: was set, should be cleared; no base value to write → stays empty
    expect(el.style.paddingInline).toBe('')

    // marginTop: was set, cleared, then base value applied
    expect(el.style.marginTop).toBe('12px')
  })

  it('does not clear or write props that are not present in the input props object', () => {
    const el = document.createElement('div')
    el.style.marginLeft = '13px' // not included in props
    const ref = makeRef(el)

    const props: AnyProps = {
      marginRight: { base: '7px' },
    }

    computeResponsiveCss(ref, 'base', props)

    expect(el.style.marginRight).toBe('7px') // written
    expect(el.style.marginLeft).toBe('13px') // untouched
  })
})

describe('computeResponsiveCss — empty string treated as nil', () => {
  it('retains base margin at md when md is empty string (shorthand overrides longhand)', () => {
    const el = document.createElement('div')
    el.style.marginLeft = '5px' // will be overridden by 'margin'
    const ref = { current: el } as unknown as React.RefObject<HTMLElement>

    const props: Record<string, any> = {
      margin: { base: '8px', md: '' }, // '' treated as nil
      padding: { base: '1rem' },
    }

    computeResponsiveCss(ref, 'md', props)

    expect(el.style.margin).toBe('8px') // base persists
    expect(el.style.marginLeft).toBe('8px') // shorthand overrides longhand
    expect(el.style.padding).toBe('1rem')
  })

  it('longhand at higher breakpoint overrides shorthand from lower breakpoint', () => {
    const el = document.createElement('div')
    const ref = { current: el } as unknown as React.RefObject<HTMLElement>

    const props: Record<string, any> = {
      margin: { base: '8px' }, // shorthand at base
      marginLeft: { md: '12px' }, // longhand at md
    }

    computeResponsiveCss(ref, 'md', props)

    // assert longhands to avoid serialization differences
    expect(el.style.marginTop).toBe('8px')
    expect(el.style.marginRight).toBe('8px')
    expect(el.style.marginBottom).toBe('8px')
    expect(el.style.marginLeft).toBe('12px')

    // optional: if you still want to check the shorthand, accept both common serializations
    const shorthand = el.style.margin
    expect(shorthand === '8px 8px 8px 12px' || shorthand === '8px').toBe(true)
  })
})
