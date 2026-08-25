import { ElementType } from 'react'

import { Box, NEB_LENGTH } from 'lib/components'

import { BORDER_WIDTH_AT_START, CORNERS_AT_END, CORNERS_AT_START } from './constants'
import type { BoxGroupItemInternalProps, BoxGroupItemProps } from './types'

export const BoxGroupItem = <T extends ElementType = 'div'>(props: BoxGroupItemProps<T>) => {
  const { index, count, squared, flexDirection } = props as BoxGroupItemInternalProps
  const direction = flexDirection as BoxGroupItemInternalProps['flexDirection']

  const radii: Record<string, string> = squared
    ? {
        borderTopLeftRadius: NEB_LENGTH.px_000,
        borderTopRightRadius: NEB_LENGTH.px_000,
        borderBottomRightRadius: NEB_LENGTH.px_000,
        borderBottomLeftRadius: NEB_LENGTH.px_000,
      }
    : {}

  const isJoined = !squared && count > 1

  if (isJoined && index < count - 1) {
    for (const corner of CORNERS_AT_END[direction]) radii[corner] = NEB_LENGTH.px_000
  }

  if (isJoined && index > 0) {
    for (const corner of CORNERS_AT_START[direction]) radii[corner] = NEB_LENGTH.px_000
  }

  const borderWidth =
    count > 1 && index > 0 ? { [BORDER_WIDTH_AT_START[direction]]: NEB_LENGTH.px_000 } : {}

  return <Box {...radii} {...borderWidth} {...props} />
}

BoxGroupItem.displayName = 'BoxGroup.Item'
