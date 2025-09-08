import { describe, it, expect } from 'vitest'

import { getCssValuesPerBp } from '.'

type AnyProps = Record<string, any>

describe('getCssValuesPerBp method', () => {
  it('at base: includes primitive props and .base from responsive objects; skips nils', () => {
    const props: AnyProps = {
      display: 'block', // primitive
      margin: { base: '8px', md: '16px' }, // responsive -> base
      padding: { base: '2rem' }, // responsive -> base
      overflowX: undefined, // nil
      overflowY: null, // nil
    }

    const result = getCssValuesPerBp('base', props)

    expect(result).toEqual({
      display: 'block',
      margin: '8px',
      padding: '2rem',
    })
  })

  it('at non-base: ignores primitives; includes only value for that breakpoint from responsive objects', () => {
    const props: AnyProps = {
      display: 'flex', // primitive -> ignored at md
      margin: { base: '4px', md: '12px' }, // md present
      paddingInline: { base: '1rem' }, // md missing -> skip
      paddingBlock: { base: '2rem', md: null }, // md null -> skip
      blockSize: { md: '40vh' }, // md present
    }

    const result = getCssValuesPerBp('md', props)

    expect(result).toEqual({
      margin: '12px',
      blockSize: '40vh',
    })
  })

  it('skips responsive objects that lack a value for the current breakpoint', () => {
    const props: AnyProps = {
      inlineSize: { sm: '200px' }, // no base -> skip
      marginTop: { base: undefined, md: '24px' }, // base undefined -> skip
    }

    const base = getCssValuesPerBp('base', props)
    expect(base).toEqual({})
  })

  it('handles mixed breakpoints consistently across base/sm/md/lg/xl', () => {
    const props: AnyProps = {
      // primitive (should only appear at base)
      position: 'absolute',

      // responsive (full ladder)
      marginBlock: { base: '2px', sm: '4px', md: '8px', lg: '16px', xl: '24px' },

      // responsive (sparse)
      paddingTop: { base: '1rem', lg: '3rem', xl: '4rem' },

      // responsive (appears from md up)
      right: { base: '0', md: '10px', xl: '20px' },
    }

    const base = getCssValuesPerBp('base', props)
    const sm = getCssValuesPerBp('sm', props)
    const md = getCssValuesPerBp('md', props)
    const lg = getCssValuesPerBp('lg', props)
    const xl = getCssValuesPerBp('xl', props)

    expect(base).toEqual({
      position: 'absolute',
      marginBlock: '2px',
      paddingTop: '1rem',
      right: '0',
    })
    expect(sm).toEqual({
      marginBlock: '4px',
    })
    expect(md).toEqual({
      marginBlock: '8px',
      right: '10px',
    })
    expect(lg).toEqual({
      marginBlock: '16px',
      paddingTop: '3rem',
    })
    expect(xl).toEqual({
      marginBlock: '24px',
      paddingTop: '4rem',
      right: '20px',
    })
  })

  it('does not mutate the input object', () => {
    const props: AnyProps = {
      marginInline: { base: '2px', md: '8px', xl: '20px' },
      paddingBottom: '24px',
    }
    const snapshot = JSON.parse(JSON.stringify(props))

    getCssValuesPerBp('base', props)
    getCssValuesPerBp('md', props)
    getCssValuesPerBp('xl', props)

    expect(props).toEqual(snapshot)
  })
})

describe('getCssValuesPerBp — empty string treated as nil', () => {
  it('ignores empty string at a higher breakpoint', () => {
    const props: AnyProps = {
      margin: { base: '8px', md: '' }, // '' should be treated like no override
    }

    const base = getCssValuesPerBp('base', props)
    const md = getCssValuesPerBp('md', props)

    expect(base).toEqual({ margin: '8px' })
    // md bucket should NOT include margin at all (so merge will keep base)
    expect(md).toEqual({})
  })

  it('keeps other props unaffected', () => {
    const props: AnyProps = {
      margin: { base: '8px', md: '' },
      padding: { base: '1rem', md: '2rem' },
    }
    const md = getCssValuesPerBp('md', props)
    expect(md).toEqual({ padding: '2rem' })
  })
})
