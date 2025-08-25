import { LIB_PREFIX } from 'lib/definitions'
import type { CompWithCssVarsPrefix } from 'lib/definitions'

import { getCssVars } from '.'
import { formatCssVarValue } from './formatCssVarValue'

describe('getCssVars', () => {
  const prefix: CompWithCssVarsPrefix = 'box'

  test('returns empty object when props is empty', () => {
    const out = getCssVars(prefix, {})
    expect(out).toEqual({})
  })

  test('returns empty object when props is undefined', () => {
    expect(getCssVars(prefix, undefined)).toEqual({})
  })

  test('aggregates base scalar props into CSS vars', () => {
    const props = {
      display: 'flex',
      lineHeight: 1.5,
    }
    const out = getCssVars(prefix, props)

    const expected = {
      [`--${LIB_PREFIX}-${prefix}-display-base`]: formatCssVarValue('display', 'flex'),
      [`--${LIB_PREFIX}-${prefix}-line-height-base`]: formatCssVarValue('lineHeight', 1.5),
    }

    expect(out).toEqual(expected)
  })

  test('handles responsive object props', () => {
    const props = {
      marginTop: {
        base: 0,
        md: 16,
        xl: 32,
      },
    }

    const out = getCssVars(prefix, props)

    const expected = {
      [`--${LIB_PREFIX}-${prefix}-margin-top-base`]: formatCssVarValue('marginTop', 0),
      [`--${LIB_PREFIX}-${prefix}-margin-top-md`]: formatCssVarValue('marginTop', 16),
      [`--${LIB_PREFIX}-${prefix}-margin-top-xl`]: formatCssVarValue('marginTop', 32),
    }

    expect(out).toEqual(expected)
  })

  test('merges multiple props (scalar + responsive)', () => {
    const props = {
      display: 'block',
      paddingLeft: {
        base: 4,
        lg: 12,
      },
    }

    const out = getCssVars(prefix, props)

    const expected = {
      [`--${LIB_PREFIX}-${prefix}-display-base`]: formatCssVarValue('display', 'block'),
      [`--${LIB_PREFIX}-${prefix}-padding-left-base`]: formatCssVarValue('paddingLeft', 4),
      [`--${LIB_PREFIX}-${prefix}-padding-left-lg`]: formatCssVarValue('paddingLeft', 12),
    }

    expect(out).toEqual(expected)
  })
})
