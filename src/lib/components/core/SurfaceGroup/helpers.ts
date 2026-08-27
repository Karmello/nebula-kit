import { CSSProperties } from 'react'

import { NEB_LENGTH } from 'lib/constants'
import type { CssFlexDirection } from 'lib/types'

import { BORDER_WIDTH_AT_START, CORNERS_AT_END, CORNERS_AT_START } from './constants'

export const resolveJoinedSurfaceStyle = ({
  index,
  count,
  squared,
  flexDirection,
}: {
  index: number
  count: number
  squared?: boolean
  flexDirection: CssFlexDirection
}): CSSProperties => {
  const style: CSSProperties = squared
    ? {
        borderTopLeftRadius: NEB_LENGTH.px_000,
        borderTopRightRadius: NEB_LENGTH.px_000,
        borderBottomRightRadius: NEB_LENGTH.px_000,
        borderBottomLeftRadius: NEB_LENGTH.px_000,
      }
    : {}

  const isJoined = !squared && count > 1

  if (isJoined && index < count - 1) {
    for (const corner of CORNERS_AT_END[flexDirection]) {
      ;(style as Record<string, string>)[corner] = NEB_LENGTH.px_000
    }
  }

  if (isJoined && index > 0) {
    for (const corner of CORNERS_AT_START[flexDirection]) {
      ;(style as Record<string, string>)[corner] = NEB_LENGTH.px_000
    }
  }

  if (count > 1 && index > 0) {
    ;(style as Record<string, string>)[BORDER_WIDTH_AT_START[flexDirection]] = NEB_LENGTH.px_000
  }

  return style
}
