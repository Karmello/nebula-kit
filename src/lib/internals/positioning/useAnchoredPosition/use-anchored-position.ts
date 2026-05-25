import { RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react'

import { AnchoredPlacement, AnchoredPosition } from '../definitions'
import { resolveAnchoredPosition } from '../resolveAnchoredPosition'
import { resolvePlacementTransform } from '../resolvePlacementTransform'

export type UseAnchoredPositionProps = {
  anchorRef?: RefObject<HTMLElement | null>
  placement: AnchoredPlacement
  offset?: number
}

export type UseAnchoredPositionReturn = AnchoredPosition & {
  transform?: string
}

export const useAnchoredPosition = ({ anchorRef, placement, offset }: UseAnchoredPositionProps): UseAnchoredPositionReturn => {
  const [position, setPosition] = useState<AnchoredPosition>({})

  const frameRef = useRef<number | null>(null)

  const updatePosition = useCallback(() => {
    const anchor = anchorRef?.current

    if (!anchor) return

    const nextPosition = resolveAnchoredPosition({
      anchor,
      placement,
      offset,
    })

    setPosition(prev => {
      if (prev.top === nextPosition.top && prev.left === nextPosition.left) {
        return prev
      }

      return nextPosition
    })
  }, [anchorRef, placement, offset])

  useLayoutEffect(() => {
    if (!anchorRef?.current) return

    let active = true

    const tick = () => {
      if (!active) return

      updatePosition()
      frameRef.current = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      active = false

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [anchorRef, updatePosition])

  return {
    ...position,
    transform: resolvePlacementTransform({ placement }),
  }
}
