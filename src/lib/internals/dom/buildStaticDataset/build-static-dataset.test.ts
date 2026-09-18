import { buildStaticDataset } from '../buildStaticDataset'

describe('buildStaticDataset', () => {
  it('maps defined props to static data attributes', () => {
    const result = buildStaticDataset('Box', {
      intent: 'primary',
      color: 'blue',
    })

    expect(result).toEqual({
      'data-neb-box-intent': 'primary',
      'data-neb-box-color': 'blue',
    })
  })

  it('ignores props with undefined values', () => {
    const result = buildStaticDataset('Box', {
      intent: 'primary',
      color: undefined,
    })

    expect(result).toEqual({
      'data-neb-box-intent': 'primary',
    })

    expect(Object.keys(result)).toHaveLength(1)
  })

  it('returns an empty object when no valid props are provided', () => {
    const result = buildStaticDataset('Text', {
      size: undefined,
      weight: undefined,
    })

    expect(result).toEqual({})
  })

  it('kebab-cases component and prop names in data attributes', () => {
    const result = buildStaticDataset('AppFrameHeader', {
      isSticky: true,
    })

    expect(result).toEqual({
      'data-neb-app-frame-header-is-sticky': true,
    })
  })
})
