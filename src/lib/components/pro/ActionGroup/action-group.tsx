import { cloneElement } from 'react'

import { WithSlots } from 'lib/components/shared'
import { Flex } from 'lib/index.core'

import {
  DEFAULT_ACTION_GROUP_DIRECTION,
  DEFAULT_ACTION_GROUP_GAP,
  DEFAULT_ACTION_GROUP_INTENT,
  DEFAULT_ACTION_GROUP_RIPPLE,
} from './constants'
import { ActionGroupItemInternalProps } from './slots'
import { ActionGroupProps } from './types'

export const ActionGroup = ({
  children,
  tagAttrs,
  tagRef,
  direction = DEFAULT_ACTION_GROUP_DIRECTION,
  gap = DEFAULT_ACTION_GROUP_GAP,
  square,
  color,
  intent = DEFAULT_ACTION_GROUP_INTENT,
  ripple = DEFAULT_ACTION_GROUP_RIPPLE,
}: ActionGroupProps) => {
  return (
    <WithSlots<'ActionGroup.Item'>
      componentName="ActionGroup"
      slotsConfig={[{ name: 'ActionGroup.Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        const itemSlots = slotsByName['ActionGroup.Item']

        return (
          <Flex
            tagAttrs={tagAttrs}
            tagRef={tagRef}
            flexDirection={direction}
            color={color}
            intent={intent}
            drawable
            surface="dividing"
            variant="solid"
            alignItems="stretch"
            gap={gap}
            borderRadius={square ? '0px' : undefined}
          >
            {itemSlots.map((slot, index) =>
              cloneElement(
                slot as any,
                {
                  key: index,
                  color,
                  intent,
                  ripple,
                  itemsCount: itemSlots.length,
                  isFirst: index === 0,
                  isLast: index === itemSlots.length - 1,
                  direction,
                  square,
                } as ActionGroupItemInternalProps
              )
            )}
          </Flex>
        )
      }}
    </WithSlots>
  )
}

ActionGroup.displayName = 'ActionGroup'
