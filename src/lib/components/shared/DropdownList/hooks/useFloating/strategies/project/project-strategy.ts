import { DEFAULT_FLOATING_PLACEMENT } from '../../constants'
import {
  applyViewportPadding,
  expandAxes,
  formatPlacement,
  getInlineSpace,
  normalizeInlineEnvelope,
  parsePlacement,
  resolveAutoAlign,
  resolveAutoSide,
  Side,
} from '../../helpers'
import { FloatingProjectProps, FloatingResolved } from '../../types'

export const resolveProjectStrategy = (
  props: Omit<FloatingProjectProps, 'children' | 'onResolve'>
): FloatingResolved => {
  const {
    mode,
    placement = DEFAULT_FLOATING_PLACEMENT,
    minInlineSize,
    maxInlineSize,
    offset = 0,
    viewportPadding = 0,
    anchorRef,
  } = props

  const anchor = anchorRef.current?.getBoundingClientRect()
  if (!anchor) {
    return { placement: placement ?? 'bottom-start' }
  }

  const rawViewport = {
    top: 0,
    left: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const viewport = applyViewportPadding(rawViewport, viewportPadding)

  const { side: preferredSide, align: preferredAlign } = parsePlacement(placement ?? 'bottom-start')

  const allowedSides = expandAxes(mode.split('-')[1] as never)

  // normalize envelope against viewport width
  const envelope = normalizeInlineEnvelope(minInlineSize, maxInlineSize, viewport.width)

  // ---------- Phase 1: SIDE ----------

  const autoSide = resolveAutoSide(mode.split('-')[1] as never, anchor, viewport)

  const candidates = allowedSides.map(side => {
    const inlineSpace = getInlineSpace(
      side,
      anchor,
      viewport,
      side === 'left' || side === 'right' ? offset : 0
    )

    return {
      side,
      inlineSpace,
      comfortable: inlineSpace >= envelope.max,
      acceptable: inlineSpace >= envelope.min,
    }
  })

  const pickSide = (side: Side | null): Side | null => {
    if (!side) return null
    const c = candidates.find(c => c.side === side)
    return c && c.acceptable ? c.side : null
  }

  const resolvedSide: Side =
    // 1. strong auto opinion if acceptable
    pickSide(autoSide) ??
    // 2. preferred side inertia if acceptable
    pickSide(preferredSide) ??
    // 3. any comfortable side
    candidates.find(c => c.comfortable)?.side ??
    // 4. any acceptable side
    candidates.find(c => c.acceptable)?.side ??
    // 5. best bad option (most inline space)
    candidates.sort((a, b) => b.inlineSpace - a.inlineSpace)[0].side

  // ---------- Phase 2: ALIGN ----------

  const autoAlign = resolveAutoAlign(resolvedSide, anchor, viewport)

  const resolvedAlign = autoAlign === preferredAlign ? preferredAlign : autoAlign

  return {
    placement: formatPlacement(resolvedSide, resolvedAlign),
  }
}
