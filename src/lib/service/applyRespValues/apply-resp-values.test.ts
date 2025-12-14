import { applyRespValues } from '../applyRespValues'

const makeRef = () => ({
  current: {
    style: {} as Record<string, unknown>,
    dataset: {} as Record<string, unknown>,
  },
})

describe('applyRespValues', () => {
  it('applies a simple style value', () => {
    const ref = makeRef()

    applyRespValues('style', ref, 'base', { padding: '20px' })

    expect(ref.current.style.padding).toBe('20px')
  })

  it('does not apply undefined values', () => {
    const ref = makeRef()

    applyRespValues('style', ref, 'base', { padding: undefined })

    expect(ref.current.style.padding).toBeUndefined()
  })

  it('does not apply blank string values', () => {
    const ref = makeRef()

    applyRespValues('style', ref, 'base', { padding: '' })

    expect(ref.current.style.padding).toBeUndefined()
  })

  it('resets values when prop is removed', () => {
    const ref = makeRef()

    // first apply
    applyRespValues('style', ref, 'base', { padding: '20px' })
    expect(ref.current.style.padding).toBe('20px')

    // then remove padding entirely
    applyRespValues('style', ref, 'base', {})
    expect(ref.current.style.padding).toBe('')
  })

  it('does not reset inherited responsive values', () => {
    const ref = makeRef()

    // base: padding = 20px
    applyRespValues('style', ref, 'base', {
      padding: { base: '20px', md: undefined },
    })

    // md inherits base value (20px)
    applyRespValues('style', ref, 'md', {
      padding: { base: '20px', md: undefined },
    })

    expect(ref.current.style.padding).toBe('20px')
  })

  it('merges responsive buckets correctly across breakpoints', () => {
    const ref = makeRef()

    applyRespValues('style', ref, 'md', {
      padding: { base: '10px', sm: '15px', md: '20px' },
    })

    expect(ref.current.style.padding).toBe('20px')
  })

  it('applies dataset values with prefixed names', () => {
    const ref = makeRef()

    applyRespValues(
      'dataset',
      ref,
      'base',
      {
        intent: 'primary',
      },
      'Box'
    )

    expect(ref.current.dataset.nebBoxIntent).toBe('primary')
  })

  it('resets dataset values when removed', () => {
    const ref = makeRef()

    applyRespValues('dataset', ref, 'base', { intent: 'primary' }, 'Box')
    expect(ref.current.dataset.nebBoxIntent).toBe('primary')

    applyRespValues('dataset', ref, 'base', {}, 'Box')
    expect(ref.current.dataset.nebBoxIntent).toBeUndefined()
  })

  it('does not reset unrelated keys', () => {
    const ref = makeRef()

    ref.current.style.opacity = '0.5' // manually set

    applyRespValues('style', ref, 'base', { padding: '10px' })

    expect(ref.current.style.opacity).toBe('0.5') // untouched
    expect(ref.current.style.padding).toBe('10px')
  })

  it('only resets keys that existed before and were removed', () => {
    const ref = makeRef()

    applyRespValues('style', ref, 'base', {
      padding: '20px',
      margin: '30px',
    })

    expect(ref.current.style.padding).toBe('20px')
    expect(ref.current.style.margin).toBe('30px')

    // Now only remove padding, margin should remain
    applyRespValues('style', ref, 'base', {
      margin: '30px',
    })

    expect(ref.current.style.padding).toBe('')
    expect(ref.current.style.margin).toBe('30px')
  })
})
