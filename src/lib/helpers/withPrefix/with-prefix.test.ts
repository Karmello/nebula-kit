import { LIB_PREFIX } from 'lib/definitions'

import { withPrefix } from '../withPrefix'

describe('withPrefix', () => {
  it('prepends LIB_PREFIX with a dash to the given element', () => {
    expect(withPrefix('box')).toBe(`${LIB_PREFIX}-box`)
    expect(withPrefix('flex')).toBe(`${LIB_PREFIX}-flex`)
    expect(withPrefix('text')).toBe(`${LIB_PREFIX}-text`)
  })

  it('works with arbitrary strings (not just known components)', () => {
    expect(withPrefix('custom-thing')).toBe(`${LIB_PREFIX}-custom-thing`)
    expect(withPrefix('')).toBe(`${LIB_PREFIX}-`)
  })
})
