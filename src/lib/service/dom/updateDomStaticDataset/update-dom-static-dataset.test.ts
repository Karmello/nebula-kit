import { updateDomStaticDataset } from '../updateDomStaticDataset'

describe('updateDomStaticDataset', () => {
  it('maps defined props to static data attributes', () => {
    const result = updateDomStaticDataset('Box', {
      intent: 'primary',
      variant: 'solid',
    })

    expect(result).toEqual({
      'data-neb-box-intent': 'primary',
      'data-neb-box-variant': 'solid',
    })
  })

  it('ignores props with undefined values', () => {
    const result = updateDomStaticDataset('Box', {
      intent: 'primary',
      variant: undefined,
    })

    expect(result).toEqual({
      'data-neb-box-intent': 'primary',
    })

    expect(Object.keys(result)).toHaveLength(1)
  })

  it('returns an empty object when no valid props are provided', () => {
    const result = updateDomStaticDataset('Text', {
      size: undefined,
      weight: undefined,
    })

    expect(result).toEqual({})
  })

  it('kebab-cases component and prop names in data attributes', () => {
    const result = updateDomStaticDataset('AppFrameHeader', {
      isSticky: true,
    })

    expect(result).toEqual({
      'data-neb-app-frame-header-is-sticky': true,
    })
  })
})
