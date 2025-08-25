import { BREAKPOINTS, LIB_PREFIX } from 'lib/definitions'
import type { CompWithCssVarsPrefix } from 'lib/definitions'

import { getSingleCssVar } from '.'
import { formatCssVarValue } from '../formatCssVarValue'
import type { GetCssVarsProps } from '../get-css-vars'

describe('getSingleCssVar', () => {
  const prefix: CompWithCssVarsPrefix = 'box'

  test('returns empty object when prop is undefined', () => {
    const props = {} as GetCssVarsProps<string | number>
    const out = getSingleCssVar(prefix, props, 'marginTop')
    expect(out).toEqual({})
  })

  test('emits base var for scalar number', () => {
    const props = { marginTop: 8 } as unknown as GetCssVarsProps<string | number>
    const out = getSingleCssVar(prefix, props, 'marginTop')

    const key = `--${LIB_PREFIX}-${prefix}-margin-top-base`
    const val = formatCssVarValue('marginTop', 8)

    expect(Object.keys(out)).toEqual([key])
    expect(out[key]).toBe(val)
  })

  test('emits base var for scalar string', () => {
    const props = { display: 'block' } as unknown as GetCssVarsProps<string | number>
    const out = getSingleCssVar(prefix, props, 'display')

    const key = `--${LIB_PREFIX}-${prefix}-display-base`
    const val = formatCssVarValue('display', 'block')

    expect(Object.keys(out)).toEqual([key])
    expect(out[key]).toBe(val)
  })

  test('emits vars only for defined breakpoints in an object value', () => {
    // define a sparse responsive value: base, md, xl
    const props = {
      marginTop: {
        base: 0,
        md: 16,
        xl: 32,
      },
    } as unknown as GetCssVarsProps<string | number>

    const out = getSingleCssVar(prefix, props, 'marginTop')

    // expected keys only for the breakpoints we set
    const expectedKeys = ['base', 'md', 'xl'].map(bp => `--${LIB_PREFIX}-${prefix}-margin-top-${bp}`)

    // also assert that none of the other BREAKPOINTS were emitted
    const unexpected = BREAKPOINTS.filter(bp => !['base', 'md', 'xl'].includes(bp)).map(
      bp => `--${LIB_PREFIX}-${prefix}-margin-top-${bp}`
    )

    expect(Object.keys(out).sort()).toEqual(expectedKeys.sort())

    // values are formatted via your formatter
    expect(out[`--${LIB_PREFIX}-${prefix}-margin-top-base`]).toBe(formatCssVarValue('marginTop', 0))
    expect(out[`--${LIB_PREFIX}-${prefix}-margin-top-md`]).toBe(formatCssVarValue('marginTop', 16))
    expect(out[`--${LIB_PREFIX}-${prefix}-margin-top-xl`]).toBe(formatCssVarValue('marginTop', 32))

    // ensure no stray keys
    unexpected.forEach(k => expect(out[k]).toBeUndefined())
  })

  test('kebab-cases the propName for variable key', () => {
    const props = { lineHeight: 1.4 } as unknown as GetCssVarsProps<string | number>
    const out = getSingleCssVar(prefix, props, 'lineHeight')

    const key = `--${LIB_PREFIX}-${prefix}-line-height-base`
    expect(Object.keys(out)).toEqual([key])
    expect(out[key]).toBe(formatCssVarValue('lineHeight', 1.4))
  })
})
