import { describe, it, expect } from 'vitest'

import { handleArrowNavigation } from './handle-arrow-navigation'
import { BUTTON_SIZE_CONFIG } from 'lib/components/core/controls/Button/definitions'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

describe('handleArrowNavigation', () => {
  it('moves down by one when all items are visible and no scroll adjustment needed', () => {
    const result = handleArrowNavigation(
      'ArrowDown',
      5, // itemsCount
      5, // visibleItemsCount (whole list visible)
      'md', // assuming BUTTON_SIZE_CONFIG['md'] exists
      0, // scrollTop
      1 // activeIndex
    )

    expect(result.activeIndex).toBe(2)
    expect(result.scrollTop).toBe(0)
  })

  it('does not move above first item when pressing ArrowUp at index 0', () => {
    const result = handleArrowNavigation(
      'ArrowUp',
      5,
      5,
      'md',
      0, // scrollTop
      0 // activeIndex at top
    )

    expect(result.activeIndex).toBe(0)
    expect(result.scrollTop).toBe(0)
  })

  it('aligns next item to top when moving down past the window, clamped to max scroll', () => {
    const itemSize =
      Number(BUTTON_SIZE_CONFIG['md'].blockSize.replace('px', '')) +
      Number(BOX_BORDER_WIDTH.replace('px', ''))
    const maxScrollTop = (10 - 5) * itemSize // itemsCount - visibleItemsCount

    const result = handleArrowNavigation(
      'ArrowDown',
      10,
      5,
      'md',
      itemSize * 2, // firstVisibleIndex = 2, lastVisibleIndex = 6
      6
    )

    expect(result.activeIndex).toBe(7)
    // desired top align would be 7 * itemSize, but it must clamp to maxScrollTop
    expect(result.scrollTop).toBe(maxScrollTop)
  })

  it('scrolls the list so the next item becomes top-aligned when moving down past visible window (no clamp)', () => {
    const itemSize =
      Number(BUTTON_SIZE_CONFIG['md'].blockSize.replace('px', '')) +
      Number(BOX_BORDER_WIDTH.replace('px', ''))

    const result = handleArrowNavigation(
      'ArrowDown',
      20, // plenty of items so no clamping
      5,
      'md',
      itemSize * 2, // firstVisibleIndex = 2, lastVisibleIndex = 6
      6 // activeIndex = last visible
    )

    expect(result.activeIndex).toBe(7)
    // full top alignment, no clamp
    expect(result.scrollTop).toBe(itemSize * 7)
  })

  it('scrolls the list so the previous item becomes bottom-aligned when moving up past visible window', () => {
    const itemSize = Number(BUTTON_SIZE_CONFIG['md'].blockSize.replace('px', ''))

    // simulate being scrolled down a bit
    const scrollTop = itemSize * 5 // firstVisibleIndex = 5, lastVisibleIndex = 9

    const result = handleArrowNavigation(
      'ArrowUp',
      20, // many items, so no clamping
      5,
      'md',
      scrollTop,
      5 // activeIndex = first visible item
    )

    expect(result.activeIndex).toBe(4)
    // should scroll so item 4 (the new one) is bottom-aligned
    expect(result.scrollTop).toBe(itemSize * (4 + 1 - 5)) // itemBottom - listHeight = (4 - visibleCount + 1) * itemSize
  })

  it('adjusts scroll gently when first navigation down targets a half-visible top item', () => {
    const itemSize = Number(BUTTON_SIZE_CONFIG['md'].blockSize.replace('px', ''))
    const halfItemScroll = itemSize / 2 // top item is half cut off

    const result = handleArrowNavigation(
      'ArrowDown',
      20,
      5,
      'md',
      halfItemScroll, // scrollTop starts halfway into item 0
      -1 // no selection yet
    )

    // should select the firstVisibleIndex (0) and align it fully into view
    expect(result.activeIndex).toBe(0)
    expect(result.scrollTop).toBe(0)
  })

  it('adjusts scroll gently when first navigation up targets a half-visible bottom item', () => {
    const itemSize =
      Number(BUTTON_SIZE_CONFIG['md'].blockSize.replace('px', '')) +
      Number(BOX_BORDER_WIDTH.replace('px', ''))
    const visibleItemsCount = 5
    const itemsCount = 20

    // scroll so the bottom item is half cut off
    const halfCutScroll = itemSize * (itemsCount - visibleItemsCount) + itemSize / 2

    const result = handleArrowNavigation(
      'ArrowUp',
      itemsCount,
      visibleItemsCount,
      'md',
      halfCutScroll,
      -1 // no selection yet
    )

    // should pick lastVisibleIndex and align it fully
    const expectedScroll = (itemsCount - visibleItemsCount) * itemSize
    expect(result.activeIndex).toBe(itemsCount - 1)
    expect(result.scrollTop).toBe(expectedScroll)
  })

  it('does nothing when pressing ArrowDown on the last item', () => {
    const result = handleArrowNavigation(
      'ArrowDown',
      5, // itemsCount
      5, // all visible
      'md',
      0, // scrollTop
      4 // activeIndex = last item
    )

    expect(result.activeIndex).toBe(4)
    expect(result.scrollTop).toBe(0)
  })

  it('keeps scrollTop at 0 when list has fewer items than visible count', () => {
    const result = handleArrowNavigation(
      'ArrowDown',
      3, // only 3 items
      5, // window can show 5
      'md',
      0,
      1
    )

    expect(result.activeIndex).toBe(2)
    expect(result.scrollTop).toBe(0)
  })
})
