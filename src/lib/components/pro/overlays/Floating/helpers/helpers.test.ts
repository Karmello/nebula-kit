import { describe, it, expect, vi, beforeEach } from 'vitest'

import { resolve } from './helpers'
import type { FloatingResolved, FloatingProps } from '../definitions'

describe('Floating resolve - basic behavior', () => {
  beforeEach(() => {
    // Mock viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1000,
    })

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 800,
    })
  })

  it('keeps placement when there is enough space', () => {
    const anchorEl = {
      getBoundingClientRect: vi.fn(() => ({
        top: 300,
        bottom: 340,
        left: 400,
        right: 440,
        width: 40,
        height: 40,
      })),
    } as unknown as HTMLElement

    const anchorRef = { current: anchorEl }

    const props: FloatingProps = {
      children: null,
      anchorRef,
      placement: 'bottom-start',
      floatingBlockSize: 200,
      floatingInlineSize: 200,
      offset: 0,
      viewportPadding: 0,
    }

    let resolved: FloatingResolved | null = null

    resolve(props, r => {
      resolved = r
    })

    expect(resolved).not.toBeNull()
    expect(resolved!.placement).toBe('bottom-start')
    expect(resolved!.blockSize).toBeUndefined()
  })

  it('does not flip if staying shows more content than flipping', () => {
    const anchorEl = {
      getBoundingClientRect: vi.fn(() => ({
        top: 300,
        bottom: 340,
        left: 400,
        right: 440,
        width: 40,
        height: 40,
      })),
    } as unknown as HTMLElement

    const anchorRef = { current: anchorEl }

    const props: FloatingProps = {
      children: null,
      anchorRef,
      placement: 'bottom-start',
      floatingBlockSize: 600,
      offset: 0,
      viewportPadding: 0,
    }

    let resolved: FloatingResolved | null = null

    resolve(props, r => {
      resolved = r
    })

    expect(resolved).not.toBeNull()
    expect(resolved!.placement).toBe('bottom-start')
    expect(resolved!.blockSize).toBe(460)
  })

  it('flips when the opposite side shows more content', () => {
    const anchorEl = {
      getBoundingClientRect: vi.fn(() => ({
        top: 500,
        bottom: 540,
        left: 400,
        right: 440,
        width: 40,
        height: 40,
      })),
    } as unknown as HTMLElement

    const anchorRef = { current: anchorEl }

    const props: FloatingProps = {
      children: null,
      anchorRef,
      placement: 'bottom-start',
      floatingBlockSize: 600,
      offset: 0,
      viewportPadding: 0,
    }

    let resolved: FloatingResolved | null = null

    resolve(props, r => {
      resolved = r
    })

    expect(resolved).not.toBeNull()
    expect(resolved!.placement).toBe('top-start')
    expect(resolved!.blockSize).toBe(500)
  })

  it('nudges alignment from start to center when clipped on the right', () => {
    const anchorEl = {
      getBoundingClientRect: vi.fn(() => ({
        top: 300,
        bottom: 340,
        left: 800,
        right: 840,
        width: 40,
        height: 40,
      })),
    } as unknown as HTMLElement

    const anchorRef = { current: anchorEl }

    const props: FloatingProps = {
      children: null,
      anchorRef,
      placement: 'bottom-start',
      floatingInlineSize: 300,
      offset: 0,
      viewportPadding: 0,
    }

    let resolved: FloatingResolved | null = null

    resolve(props, r => {
      resolved = r
    })

    expect(resolved).not.toBeNull()
    expect(resolved!.placement).toBe('bottom-center')
  })

  it('nudges alignment from end to center when clipped on the left', () => {
    const anchorEl = {
      getBoundingClientRect: vi.fn(() => ({
        top: 300,
        bottom: 340,
        left: 200,
        right: 240,
        width: 40,
        height: 40,
      })),
    } as unknown as HTMLElement

    const anchorRef = { current: anchorEl }

    const props: FloatingProps = {
      children: null,
      anchorRef,
      placement: 'bottom-end',
      floatingInlineSize: 300,
      offset: 0,
      viewportPadding: 0,
    }

    let resolved: FloatingResolved | null = null

    resolve(props, r => {
      resolved = r
    })

    expect(resolved).not.toBeNull()
    expect(resolved!.placement).toBe('bottom-center')
  })

  it('flips from top to bottom when bottom shows more content', () => {
    const anchorEl = {
      getBoundingClientRect: vi.fn(() => ({
        top: 100,
        bottom: 140,
        left: 400,
        right: 440,
        width: 40,
        height: 40,
      })),
    } as unknown as HTMLElement

    const anchorRef = { current: anchorEl }

    const props: FloatingProps = {
      children: null,
      anchorRef,
      placement: 'top-start',
      floatingBlockSize: 600,
      offset: 0,
      viewportPadding: 0,
    }

    let resolved: FloatingResolved | null = null

    resolve(props, r => {
      resolved = r
    })

    expect(resolved).not.toBeNull()
    expect(resolved!.placement).toBe('bottom-start')
    expect(resolved!.blockSize).toBeUndefined()
  })

  it('when neither side fits, picks the side with more space and clamps', () => {
    const anchorEl = {
      getBoundingClientRect: vi.fn(() => ({
        top: 300,
        bottom: 340,
        left: 400,
        right: 440,
        width: 40,
        height: 40,
      })),
    } as unknown as HTMLElement

    const anchorRef = { current: anchorEl }

    const props: FloatingProps = {
      children: null,
      anchorRef,
      placement: 'bottom-start',
      floatingBlockSize: 1000,
      offset: 0,
      viewportPadding: 0,
    }

    let resolved: FloatingResolved | null = null

    resolve(props, r => {
      resolved = r
    })

    expect(resolved).not.toBeNull()
    expect(resolved!.placement).toBe('bottom-start')
    expect(resolved!.blockSize).toBe(460)
  })
})
