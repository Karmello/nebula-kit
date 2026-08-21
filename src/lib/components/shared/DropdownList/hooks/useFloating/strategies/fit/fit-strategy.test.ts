import { FloatingFitProps } from '../../definitions'
import { resolveFitStrategy } from './fit-strategy'

describe('resolveFitStrategy - no anchor', () => {
  it('returns preferred placement when anchor is missing', () => {
    const props = {
      mode: 'fit-y',
      anchorRef: { current: null },
      floatingBlockSize: 200,
      placement: 'top-start',
    } as FloatingFitProps

    const result = resolveFitStrategy(props)

    expect(result).toEqual({
      placement: 'top-start',
    })
  })
})

describe('resolveFitStrategy - preferred inertia', () => {
  it('keeps preferred side when it fully fits', () => {
    const anchorRect = {
      top: 100,
      left: 100,
      right: 140,
      bottom: 140,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'fit-y',
      placement: 'bottom-start',
      floatingBlockSize: 100,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingFitProps

    const result = resolveFitStrategy(props)

    expect(result).toEqual({
      placement: 'bottom-start',
      blockSize: 100,
    })
  })
})

describe('resolveFitStrategy - flip when beneficial', () => {
  it('flips to opposite side when preferred does not fit and opposite fits fully', () => {
    const anchorRect = {
      top: 720,
      left: 100,
      right: 140,
      bottom: 760,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'fit-y',
      placement: 'bottom-start',
      floatingBlockSize: 200,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingFitProps

    const result = resolveFitStrategy(props)

    expect(result).toEqual({
      placement: 'top-start',
      blockSize: 200,
    })
  })
})

describe('resolveFitStrategy - partial fallback', () => {
  it('picks side with more space and clamps blockSize when nothing fully fits', () => {
    const anchorRect = {
      top: 500,
      left: 100,
      right: 140,
      bottom: 540,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'fit-y',
      placement: 'bottom-start',
      floatingBlockSize: 600, // too big to fit anywhere
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingFitProps

    const result = resolveFitStrategy(props)

    // top has more space than bottom, but neither fits fully
    expect(result.placement).toBe('top-start')
    expect(result.blockSize).toBeGreaterThan(0)
    expect(result.blockSize).toBeLessThan(600)
  })
})
