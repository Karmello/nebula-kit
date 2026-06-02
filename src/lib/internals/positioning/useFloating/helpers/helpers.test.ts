import { describe, expect, it } from 'vitest'

import {
  applyViewportPadding,
  expandAxes,
  formatPlacement,
  getInlineSpace,
  normalizeInlineEnvelope,
  parsePlacement,
  Rect,
  resolveAutoAlign,
  resolveAutoSide,
} from './helpers'

describe('parsePlacement', () => {
  it('parses side and align from placement string', () => {
    const result = parsePlacement('top-start')

    expect(result).toEqual({
      side: 'top',
      align: 'start',
    })
  })
})

describe('formatPlacement', () => {
  it('formats side and align into placement string', () => {
    const result = formatPlacement('bottom', 'end')

    expect(result).toBe('bottom-end')
  })
})

describe('expandAxes', () => {
  it('expands both axes by default', () => {
    const result = expandAxes()

    expect(result).toEqual(['top', 'right', 'bottom', 'left'])
  })

  it('expands x axis to left and right', () => {
    const result = expandAxes('x')

    expect(result).toEqual(['left', 'right'])
  })

  it('expands y axis to top and bottom', () => {
    const result = expandAxes('y')

    expect(result).toEqual(['top', 'bottom'])
  })
})

describe('applyViewportPadding', () => {
  const viewport: Rect = {
    top: 0,
    left: 0,
    right: 100,
    bottom: 200,
    width: 100,
    height: 200,
  }

  it('applies padding to all sides and dimensions', () => {
    const result = applyViewportPadding(viewport, 10)

    expect(result).toEqual({
      top: 10,
      left: 10,
      right: 90,
      bottom: 190,
      width: 80,
      height: 180,
    })
  })

  it('returns identical rect when padding is zero', () => {
    const result = applyViewportPadding(viewport, 0)

    expect(result).toEqual(viewport)
  })
})

describe('normalizeInlineEnvelope', () => {
  it('clamps maxInlineSize to viewport width', () => {
    const result = normalizeInlineEnvelope(200, 500, 300)

    expect(result).toEqual({
      min: 200,
      max: 300,
    })
  })

  it('clamps minInlineSize to maxInlineSize', () => {
    const result = normalizeInlineEnvelope(400, 300, 800)

    expect(result).toEqual({
      min: 300,
      max: 300,
    })
  })

  it('returns values unchanged when within viewport', () => {
    const result = normalizeInlineEnvelope(100, 300, 500)

    expect(result).toEqual({
      min: 100,
      max: 300,
    })
  })
})

describe('getInlineSpace', () => {
  const viewport: Rect = {
    top: 0,
    left: 0,
    right: 300,
    bottom: 200,
    width: 300,
    height: 200,
  }

  const anchor: Rect = {
    top: 50,
    left: 100,
    right: 160,
    bottom: 90,
    width: 60,
    height: 40,
  }

  it('returns inline space on the left side', () => {
    const space = getInlineSpace('left', anchor, viewport)

    expect(space).toBe(100)
  })

  it('returns inline space on the right side', () => {
    const space = getInlineSpace('right', anchor, viewport)

    expect(space).toBe(140)
  })

  it('subtracts offset from inline space', () => {
    const space = getInlineSpace('left', anchor, viewport, 10)

    expect(space).toBe(90)
  })

  it('returns viewport width for top and bottom sides', () => {
    expect(getInlineSpace('top', anchor, viewport)).toBe(300)
    expect(getInlineSpace('bottom', anchor, viewport)).toBe(300)
  })
})

describe('resolveAutoAlign', () => {
  const viewport: Rect = {
    top: 0,
    left: 0,
    right: 300,
    bottom: 300,
    width: 300,
    height: 300,
  }

  it('returns start when anchor center is in first third', () => {
    const anchor: Rect = {
      top: 0,
      left: 10,
      right: 30,
      bottom: 20,
      width: 20,
      height: 20,
    }

    expect(resolveAutoAlign('bottom', anchor, viewport)).toBe('start')
  })

  it('returns center when anchor center is in middle third', () => {
    const anchor: Rect = {
      top: 0,
      left: 130,
      right: 170,
      bottom: 20,
      width: 40,
      height: 20,
    }

    expect(resolveAutoAlign('bottom', anchor, viewport)).toBe('center')
  })

  it('returns end when anchor center is in last third', () => {
    const anchor: Rect = {
      top: 0,
      left: 250,
      right: 290,
      bottom: 20,
      width: 40,
      height: 20,
    }

    expect(resolveAutoAlign('bottom', anchor, viewport)).toBe('end')
  })
})

describe('resolveAutoSide', () => {
  const viewport: Rect = {
    top: 0,
    left: 0,
    right: 300,
    bottom: 300,
    width: 300,
    height: 300,
  }

  it('returns bottom when anchor is in top third (y axis)', () => {
    const anchor: Rect = {
      top: 10,
      left: 0,
      right: 20,
      bottom: 30,
      width: 20,
      height: 20,
    }

    expect(resolveAutoSide('y', anchor, viewport)).toBe('bottom')
  })

  it('returns null when anchor is in middle third (y axis)', () => {
    const anchor: Rect = {
      top: 140,
      left: 0,
      right: 20,
      bottom: 160,
      width: 20,
      height: 20,
    }

    expect(resolveAutoSide('y', anchor, viewport)).toBe(null)
  })

  it('returns top when anchor is in bottom third (y axis)', () => {
    const anchor: Rect = {
      top: 260,
      left: 0,
      right: 20,
      bottom: 280,
      width: 20,
      height: 20,
    }

    expect(resolveAutoSide('y', anchor, viewport)).toBe('top')
  })
})
