import { cloneElement } from 'react'

import { WithSlots } from 'lib/components/shared'
import { Flex } from 'lib/index.core'

import { ActionGroupProvider, useActionGroupContext } from './action-group-provider'
import { DEFAULT_ACTION_GROUP_DIRECTION, DEFAULT_ACTION_GROUP_INTENT, DEFAULT_ACTION_GROUP_RIPPLE } from './constants'
import { ActionGroupItemInternalProps } from './slots'
import { ActionGroupProps } from './types'

const ActionGroupImpl = ({
  tagRef,
  tagAttrs,
  direction = DEFAULT_ACTION_GROUP_DIRECTION,
  attach,
  color,
  intent = DEFAULT_ACTION_GROUP_INTENT,
  elevated,
  ripple = DEFAULT_ACTION_GROUP_RIPPLE,
  stretch,
}: ActionGroupProps) => {
  const { itemSlots } = useActionGroupContext()

  let zeroTopLeft = false
  let zeroTopRight = false
  let zeroBottomLeft = false
  let zeroBottomRight = false

  if (attach === 'top' || attach === 'block') {
    zeroTopLeft = true
    zeroTopRight = true
  }

  if (attach === 'right' || attach === 'inline') {
    zeroTopRight = true
    zeroBottomRight = true
  }

  if (attach === 'bottom' || attach === 'block') {
    zeroBottomLeft = true
    zeroBottomRight = true
  }

  if (attach === 'left' || attach === 'inline') {
    zeroBottomLeft = true
    zeroTopLeft = true
  }

  const gap = '3xs'

  return (
    <Flex
      tagRef={tagRef}
      tagAttrs={tagAttrs}
      flexDirection={direction}
      color={color}
      intent={intent}
      elevated={elevated}
      drawable
      surface="dividing"
      variant="solid"
      alignItems="stretch"
      display={stretch ? 'flex' : 'inline-flex'}
      inlineSize="max-content"
      minInlineSize="100%"
      overflow="clip"
      gap={gap}
      borderTopLeftRadius={zeroTopLeft ? '0px' : undefined}
      borderTopRightRadius={zeroTopRight ? '0px' : undefined}
      borderBottomRightRadius={zeroBottomRight ? '0px' : undefined}
      borderBottomLeftRadius={zeroBottomLeft ? '0px' : undefined}
      paddingTop={attach === 'top' || attach === 'block' ? gap : undefined}
      paddingRight={attach === 'right' || attach === 'inline' ? gap : undefined}
      paddingBottom={attach === 'bottom' || attach === 'block' ? gap : undefined}
      paddingLeft={attach === 'left' || attach === 'inline' ? gap : undefined}
    >
      {itemSlots.map((slot, index) =>
        cloneElement(
          slot as any,
          {
            key: index,
            index,
            color,
            intent,
            elevated,
            ripple,
            direction,
            stretch,
          } as ActionGroupItemInternalProps
        )
      )}
    </Flex>
  )
}

export const ActionGroup = (props: ActionGroupProps) => {
  return (
    <WithSlots<'ActionGroup.Item'>
      componentName="ActionGroup"
      slotsConfig={[
        {
          name: 'ActionGroup.Item',
          required: true,
          allowMultiple: true,
        },
      ]}
      childrenToVerify={props.children}
    >
      {({ slotsByName }) => {
        const itemSlots = slotsByName['ActionGroup.Item']
        return (
          <ActionGroupProvider itemSlots={itemSlots}>
            <ActionGroupImpl {...props} />
          </ActionGroupProvider>
        )
      }}
    </WithSlots>
  )
}

ActionGroup.displayName = 'ActionGroup'
