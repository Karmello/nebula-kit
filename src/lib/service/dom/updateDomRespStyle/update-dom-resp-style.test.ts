import { updateDomRespStyle } from '../updateDomRespStyle'

const makeRef = () => ({
  current: {
    style: {} as Record<string, unknown>,
    dataset: {} as Record<string, unknown>,
  },
})

describe('updateDomRespStyle', () => {
  it('applies a simple style value', () => {
    const ref = makeRef()

    updateDomRespStyle('Box', ref, 'base', { padding: '20px' })

    expect(ref.current.style.padding).toBe('20px')
  })

  it('does not apply undefined values', () => {
    const ref = makeRef()

    updateDomRespStyle('Box', ref, 'base', { padding: undefined })

    expect(ref.current.style.padding).toBeUndefined()
  })

  it('does not apply blank string values', () => {
    const ref = makeRef()

    updateDomRespStyle('Box', ref, 'base', { padding: '' })

    expect(ref.current.style.padding).toBeUndefined()
  })

  it('resets values when prop is removed', () => {
    const ref = makeRef()

    // first apply
    updateDomRespStyle('Flex', ref, 'base', { padding: '20px' })
    expect(ref.current.style.padding).toBe('20px')

    // then remove padding entirely
    updateDomRespStyle('Flex', ref, 'base', {})
    expect(ref.current.style.padding).toBe('')
  })

  it('does not reset inherited responsive values', () => {
    const ref = makeRef()

    // base: padding = 20px
    updateDomRespStyle('Box', ref, 'base', {
      padding: { base: '20px', md: undefined },
    })

    // md inherits base value (20px)
    updateDomRespStyle('Box', ref, 'md', {
      padding: { base: '20px', md: undefined },
    })

    expect(ref.current.style.padding).toBe('20px')
  })

  it('merges responsive buckets correctly across breakpoints', () => {
    const ref = makeRef()

    updateDomRespStyle('Box', ref, 'md', {
      padding: { base: '10px', sm: '15px', md: '20px' },
    })

    expect(ref.current.style.padding).toBe('20px')
  })

  it('does not reset unrelated keys', () => {
    const ref = makeRef()

    ref.current.style.opacity = '0.5' // manually set

    updateDomRespStyle('Box', ref, 'base', { padding: '10px' })

    expect(ref.current.style.opacity).toBe('0.5') // untouched
    expect(ref.current.style.padding).toBe('10px')
  })

  it('only resets keys that existed before and were removed', () => {
    const ref = makeRef()

    updateDomRespStyle('Box', ref, 'base', {
      padding: '20px',
      margin: '30px',
    })

    expect(ref.current.style.padding).toBe('20px')
    expect(ref.current.style.margin).toBe('30px')

    // Now only remove padding, margin should remain
    updateDomRespStyle('Box', ref, 'base', {
      margin: '30px',
    })

    expect(ref.current.style.padding).toBe('')
    expect(ref.current.style.margin).toBe('30px')
  })
})
