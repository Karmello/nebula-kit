import { ComponentProps, ComponentRef, PropsWithoutRef, RefObject } from 'react'

import { ACTION_SURFACE_TAGS } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/index.core'
import { ActionSurfaceTag } from 'lib/types'

import { useDropdownListContext } from '../../providers'
import { DEFAULT_DROPDOWN_LIST_TRIGGER_VARIANT, DropdownListTriggerProps } from './definitions'

export const DropdownListTrigger = <T extends ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[0]>({
  children,
  variant = DEFAULT_DROPDOWN_LIST_TRIGGER_VARIANT,
  ...rest
}: DropdownListTriggerProps<T>) => {
  const { triggerRef, internalOpen, setInternalOpen, setResizeVisible, openOnFocus, floatingResolved, color, intent } =
    useDropdownListContext()

  const opensUpDownwards = ['bottom-start', 'bottom-end', undefined].includes(floatingResolved?.placement)

  return (
    <Box
      tag="button"
      tagRef={triggerRef as RefObject<ComponentRef<T>>}
      tagAttrs={
        {
          className: withPrefix('dropdown-list-trigger'),
          'aria-haspopup': 'listbox',
          'aria-expanded': false,
          onClick: () => {
            if (!rest.disabled && !openOnFocus) {
              if (internalOpen) {
                setResizeVisible(false)
              } else {
                setInternalOpen(true)
              }
            }
          },
          onFocus: () => {
            if (openOnFocus && !internalOpen) {
              setInternalOpen(true)
            }
          },
          onKeyDown: (e: { key: string; preventDefault: () => void }) => {
            if (e.key === 'Enter') {
              if (!internalOpen) {
                e.preventDefault()
                setInternalOpen(true)
              }
            }
          },
        } as PropsWithoutRef<ComponentProps<T>>
      }
      variant={variant}
      color={color}
      borderBottomLeftRadius={internalOpen && opensUpDownwards ? '0px' : undefined}
      borderBottomRightRadius={internalOpen && opensUpDownwards ? '0px' : undefined}
      borderTopLeftRadius={internalOpen && !opensUpDownwards ? '0px' : undefined}
      borderTopRightRadius={internalOpen && !opensUpDownwards ? '0px' : undefined}
      {...rest}
      intent={rest.intent || intent}
      interactive
      surface={internalOpen ? 'selected' : undefined}
      cursor="pointer"
    >
      {children}
    </Box>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
