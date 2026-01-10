import { FloatingProps, FloatingResult } from './definitions'

export const resolve = (props: FloatingProps, setResult: (result: FloatingResult) => void) => {
  const { anchorRef, portalBlockSize, offset, placement, viewportPadding } = props

  const anchorEl = anchorRef.current
  if (!anchorEl) return

  const rect = anchorEl.getBoundingClientRect()

  const viewportTop = resolveCssValue(viewportPadding)
  const viewportBottom = window.innerHeight - resolveCssValue(viewportPadding)

  const offsetPx = resolveCssValue(offset)
  const portalSizePx = resolveCssValue(portalBlockSize)

  const spaceBelow = viewportBottom - (rect.bottom + offsetPx)

  const spaceAbove = rect.top - offsetPx - viewportTop

  const fitsBelow = spaceBelow >= portalSizePx
  const fitsAbove = spaceAbove >= portalSizePx

  let resolvedPlacement: FloatingResult['placement']
  let maxHeight: number | undefined

  const wantTop = placement?.startsWith('top')
  const wantBottom = placement?.startsWith('bottom')

  if (!placement) {
    if (fitsBelow || spaceBelow >= spaceAbove) {
      resolvedPlacement = 'bottom-start'
      if (!fitsBelow) {
        maxHeight = Math.max(0, spaceBelow)
      }
    } else {
      resolvedPlacement = 'top-start'
      if (!fitsAbove) {
        maxHeight = Math.max(0, spaceAbove)
      }
    }
  } else if (wantTop) {
    if (fitsAbove) {
      resolvedPlacement = placement as FloatingResult['placement']
    } else {
      resolvedPlacement = 'bottom-start'
      maxHeight = Math.max(0, spaceBelow)
    }
  } else {
    if (fitsBelow) {
      resolvedPlacement = placement as FloatingResult['placement']
    } else {
      resolvedPlacement = 'top-start'
      maxHeight = Math.max(0, spaceAbove)
    }
  }

  setResult({
    placement: resolvedPlacement,
    style: maxHeight != null ? { maxHeight } : undefined,
  })
}

const resolveCssValue = (value?: string): number => {
  if (!value) return 0

  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.visibility = 'hidden'
  el.style.pointerEvents = 'none'
  el.style.width = value

  document.body.appendChild(el)
  const px = parseFloat(getComputedStyle(el).width)
  document.body.removeChild(el)

  return Number.isFinite(px) ? px : 0
}
