import { NEB_LENGTH } from 'lib/constants'
import { useRespValue } from 'lib/hooks'
import type { CssFlexDirection, RespValue } from 'lib/types'

import { DEFAULT_JOINED_SURFACE_FLEX_DIRECTION } from '../../constants'
import type { JoinedItemProps } from './types'

const CORNERS_AT_START: Record<CssFlexDirection, (keyof JoinedItemProps)[]> = {
  row: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  column: ['borderTopLeftRadius', 'borderTopRightRadius'],
  'row-reverse': ['borderTopRightRadius', 'borderBottomRightRadius'],
  'column-reverse': ['borderBottomLeftRadius', 'borderBottomRightRadius'],
}

const CORNERS_AT_END: Record<CssFlexDirection, (keyof JoinedItemProps)[]> = {
  row: ['borderTopRightRadius', 'borderBottomRightRadius'],
  column: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  'row-reverse': ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  'column-reverse': ['borderTopLeftRadius', 'borderTopRightRadius'],
}

const BORDER_WIDTH_AT_START: Record<CssFlexDirection, keyof JoinedItemProps> = {
  row: 'borderLeftWidth',
  column: 'borderTopWidth',
  'row-reverse': 'borderRightWidth',
  'column-reverse': 'borderBottomWidth',
}

const BORDER_WIDTH_AT_END: Record<CssFlexDirection, keyof JoinedItemProps> = {
  row: 'borderRightWidth',
  column: 'borderBottomWidth',
  'row-reverse': 'borderLeftWidth',
  'column-reverse': 'borderTopWidth',
}

const PERPENDICULAR_BORDER_WIDTHS: Record<CssFlexDirection, (keyof JoinedItemProps)[]> = {
  row: ['borderTopWidth', 'borderBottomWidth'],
  column: ['borderLeftWidth', 'borderRightWidth'],
  'row-reverse': ['borderTopWidth', 'borderBottomWidth'],
  'column-reverse': ['borderLeftWidth', 'borderRightWidth'],
}

export type UseJoinedItemStyleParams = {
  count: number
  squared?: boolean
  flexDirection?: RespValue<CssFlexDirection>
}

export const useJoinedItemStyle = ({
  count,
  squared,
  flexDirection = DEFAULT_JOINED_SURFACE_FLEX_DIRECTION,
}: UseJoinedItemStyleParams) => {
  const resolvedFlexDirection = useRespValue(flexDirection) ?? DEFAULT_JOINED_SURFACE_FLEX_DIRECTION

  return (index: number): JoinedItemProps => {
    const props: JoinedItemProps = squared
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

    for (const side of PERPENDICULAR_BORDER_WIDTHS[resolvedFlexDirection]) {
      props[side] = NEB_LENGTH.px_000
    }

    props[BORDER_WIDTH_AT_START[resolvedFlexDirection]] = NEB_LENGTH.px_000

    if (index === count - 1) {
      props[BORDER_WIDTH_AT_END[resolvedFlexDirection]] = NEB_LENGTH.px_000
    }

    return props
  }
}
