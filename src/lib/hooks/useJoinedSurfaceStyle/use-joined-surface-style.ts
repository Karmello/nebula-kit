import { NEB_LENGTH } from 'lib/constants'
import type { CssFlexDirection, RespValue } from 'lib/types'

import { useRespValue } from '../useRespValue'
import type { JoinedSurfaceBoxProps } from './types'

const CORNERS_AT_START: Record<CssFlexDirection, (keyof JoinedSurfaceBoxProps)[]> = {
  row: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  column: ['borderTopLeftRadius', 'borderTopRightRadius'],
  'row-reverse': ['borderTopRightRadius', 'borderBottomRightRadius'],
  'column-reverse': ['borderBottomLeftRadius', 'borderBottomRightRadius'],
}

const CORNERS_AT_END: Record<CssFlexDirection, (keyof JoinedSurfaceBoxProps)[]> = {
  row: ['borderTopRightRadius', 'borderBottomRightRadius'],
  column: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  'row-reverse': ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  'column-reverse': ['borderTopLeftRadius', 'borderTopRightRadius'],
}

const BORDER_WIDTH_AT_START: Record<CssFlexDirection, keyof JoinedSurfaceBoxProps> = {
  row: 'borderLeftWidth',
  column: 'borderTopWidth',
  'row-reverse': 'borderRightWidth',
  'column-reverse': 'borderBottomWidth',
}

export type UseJoinedSurfaceStyleParams = {
  count: number
  squared?: boolean
  flexDirection?: RespValue<CssFlexDirection>
}

export const useJoinedSurfaceStyle = ({
  count,
  squared,
  flexDirection = 'row',
}: UseJoinedSurfaceStyleParams) => {
  const resolvedFlexDirection = useRespValue(flexDirection) ?? 'row'

  return (index: number): JoinedSurfaceBoxProps => {
    const props: JoinedSurfaceBoxProps = squared
      ? {
          borderTopLeftRadius: NEB_LENGTH.px_000,
          borderTopRightRadius: NEB_LENGTH.px_000,
          borderBottomRightRadius: NEB_LENGTH.px_000,
          borderBottomLeftRadius: NEB_LENGTH.px_000,
        }
      : {}

    const isJoined = !squared && count > 1

    if (isJoined && index < count - 1) {
      for (const corner of CORNERS_AT_END[resolvedFlexDirection]) {
        props[corner] = NEB_LENGTH.px_000
      }
    }

    if (isJoined && index > 0) {
      for (const corner of CORNERS_AT_START[resolvedFlexDirection]) {
        props[corner] = NEB_LENGTH.px_000
      }
    }

    if (count > 1 && index > 0) {
      props[BORDER_WIDTH_AT_START[resolvedFlexDirection]] = NEB_LENGTH.px_000
    }

    return props
  }
}
