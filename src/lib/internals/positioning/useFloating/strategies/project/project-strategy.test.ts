import { describe, expect, it } from 'vitest'

import type { FloatingProjectProps } from '../../definitions'
import { resolveProjectStrategy } from './'

describe('resolveProjectStrategy - no anchor', () => {
  it('returns preferred placement when anchor is missing', () => {
    const props = {
      mode: 'project-both',
      anchorRef: { current: null },
      minInlineSize: 100,
      maxInlineSize: 200,
      placement: 'top-start',
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    expect(result).toEqual({
      placement: 'top-start',
    })
  })
})

describe('resolveProjectStrategy - preferred side inertia', () => {
  it('keeps preferred side when auto side is null and preferred side is acceptable', () => {
    const anchorRect = {
      top: 10,
      left: 140,
      right: 180,
      bottom: 50,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-x',
      placement: 'right-center',
      minInlineSize: 10,
      maxInlineSize: 50,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    expect(result.placement.startsWith('right')).toBe(true)
  })
})

describe('resolveProjectStrategy - preferred side inertia (valid left case)', () => {
  it('keeps preferred left side when left has sufficient inline space', () => {
    const anchorRect = {
      top: 50,
      left: 900,
      right: 940,
      bottom: 90,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-x',
      placement: 'left-center',
      minInlineSize: 100,
      maxInlineSize: 200,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    expect(result.placement.startsWith('left')).toBe(true)
  })
})

describe('resolveProjectStrategy - auto side priority', () => {
  it('uses auto side instead of preferred side when auto side is acceptable', () => {
    const anchorRect = {
      top: 10,
      left: 400,
      right: 440,
      bottom: 50,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-y',
      placement: 'top-center',
      minInlineSize: 50,
      maxInlineSize: 150,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    expect(result.placement.startsWith('bottom')).toBe(true)
  })
})

describe('resolveProjectStrategy - comfortable fallback', () => {
  it('selects a comfortable side when preferred side is unacceptable', () => {
    const anchorRect = {
      top: 50,
      left: 20,
      right: 60,
      bottom: 90,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-x',
      placement: 'left-center',
      minInlineSize: 200,
      maxInlineSize: 300,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    // right side has plenty of space, left does not
    expect(result.placement.startsWith('right')).toBe(true)
  })
})

describe('resolveProjectStrategy - acceptable fallback', () => {
  it('selects an acceptable side when no comfortable sides exist', () => {
    const anchorRect = {
      top: 50,
      left: 120,
      right: 160,
      bottom: 90,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-x',
      placement: 'left-center',
      minInlineSize: 100,
      maxInlineSize: 300,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    // right is acceptable (~860px), but not comfortable
    expect(result.placement.startsWith('right')).toBe(true)
  })
})

describe('resolveProjectStrategy - best bad fallback', () => {
  it('selects the side with the most inline space when nothing is acceptable', () => {
    const anchorRect = {
      top: 50,
      left: 140,
      right: 180,
      bottom: 90,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-x',
      placement: 'left-center',
      minInlineSize: 500,
      maxInlineSize: 800,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    // right side has more inline space than left, even though both are bad
    expect(result.placement.startsWith('right')).toBe(true)
  })
})

describe('resolveProjectStrategy - axes both prioritizes vertical auto side', () => {
  it('uses vertical auto side when axes is both and auto side is acceptable', () => {
    const anchorRect = {
      top: 10, // top third vertically
      left: 400,
      right: 440,
      bottom: 50,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-both',
      placement: 'left-center', // preferred should lose
      minInlineSize: 50,
      maxInlineSize: 150,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    expect(result.placement.startsWith('bottom')).toBe(true)
  })
})

describe('resolveProjectStrategy - align resolution', () => {
  it('uses auto align when it differs from preferred align', () => {
    const anchorRect = {
      top: 10,
      left: 10,
      right: 50,
      bottom: 50,
      width: 40,
      height: 40,
    }

    const props = {
      mode: 'project-y',
      placement: 'bottom-end',
      minInlineSize: 10,
      maxInlineSize: 100,
      anchorRef: {
        current: {
          getBoundingClientRect: () => anchorRect,
        },
      },
    } as FloatingProjectProps

    const result = resolveProjectStrategy(props)

    expect(result.placement.endsWith('start')).toBe(true)
  })
})
