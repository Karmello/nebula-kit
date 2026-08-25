import { cloneElement, ElementType } from 'react'

import { Box, NEB_LENGTH } from 'lib/components'
import { WithSlots } from 'lib/components/shared'
import { useRespValue } from 'lib/hooks'

import { DEFAULT_BOX_GROUP_DISPLAY, DEFAULT_BOX_GROUP_FLEX_DIRECTION } from './constants'
import { BoxGroupItemInternalProps } from './slots'
import { type BoxGroupProps } from './types'

export const BoxGroup = <T extends ElementType = 'div'>({
  children,
  squared,
  display = DEFAULT_BOX_GROUP_DISPLAY,
  flexDirection = DEFAULT_BOX_GROUP_FLEX_DIRECTION,
  ...props
}: BoxGroupProps<T>) => {
  const actualFlexDirection = useRespValue(flexDirection)

  return (
    <WithSlots<'BoxGroup.Item'>
      componentName="BoxGroup"
      slotsConfig={[{ name: 'BoxGroup.Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        const slots = slotsByName['BoxGroup.Item']

        return (
          <Box
            display={display}
            flexDirection={flexDirection}
            borderRadius={squared ? NEB_LENGTH.px_000 : undefined}
            {...props}
          >
            {slots.map((slot, index) =>
              cloneElement(slot as any, {
                key: index,
                index,
                count: slots.length,
                squared,
                flexDirection: actualFlexDirection,
              } satisfies BoxGroupItemInternalProps)
            )}
          </Box>
        )
      }}
    </WithSlots>
  )
}

BoxGroup.displayName = 'BoxGroup'
