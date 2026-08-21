import { ComponentPropsWithoutRef, ComponentRef, KeyboardEvent, useRef } from 'react'

import { Box } from 'lib/index.core'

import { useActionGroupContext } from '../../action-group-provider'
import { getTargetIndexFromKeyboardEvent } from '../../helpers'
import { ActionGroupItemInternalProps, ActionGroupItemProps, ActionGroupItemTag } from './types'

export const ActionGroupItem = <T extends ActionGroupItemTag = 'button'>({
  children,
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  selected,
  disabled,
  onClick,
  ...internalProps
}: ActionGroupItemProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || ref

  const { itemSlots, activeIndex, setActiveIndex } = useActionGroupContext()

  const { index, color, intent, elevated, ripple, direction, stretch } =
    internalProps as ActionGroupItemInternalProps

  return (
    <Box flex={stretch ? '1 0 auto' : undefined}>
      <Box
        tag={tag}
        tagRef={finalRef}
        tagAttrs={
          {
            ...tagAttrs,
            tabIndex: activeIndex === index ? 0 : -1,
            onFocus: () => {
              setActiveIndex(index)
            },
            onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
              const targetIndex = getTargetIndexFromKeyboardEvent(e, index, itemSlots, direction)
              if (targetIndex === undefined) return
              e.preventDefault()
              setActiveIndex(targetIndex)
              ;(
                e.currentTarget.parentElement?.parentElement?.childNodes[targetIndex]
                  .childNodes[0] as HTMLElement
              )?.focus()
            },
            onClick,
          } as ComponentPropsWithoutRef<T>
        }
        color={color}
        intent={intent}
        elevated={elevated}
        ripple={ripple}
        surface={selected ? 'selected' : undefined}
        disabled={disabled}
        minInlineSize="100%"
        interactive
        cursor="pointer"
        variant="solid"
        borderRadius="0px"
      >
        {children}
      </Box>
    </Box>
  )
}

ActionGroupItem.displayName = 'ActionGroup.Item'
