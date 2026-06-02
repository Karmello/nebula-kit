import { ComponentProps, ComponentRef, PropsWithoutRef, RefObject } from 'react'

import { ActionSurface } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { ACTION_SURFACE_TAGS } from '../../../../../constants'
import type { ActionSurfaceTag } from '../../../../../types'
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
    <ActionSurface
      tagRef={triggerRef as RefObject<ComponentRef<T>>}
      tagAttrs={
        {
          className: withPrefix('dropdown-list-trigger'),
          'aria-haspopup': 'listbox',
          'aria-expanded': false,
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
      onClick={() => {
        if (!rest.disabled && !openOnFocus) {
          if (internalOpen) {
            setResizeVisible(false)
          } else {
            setInternalOpen(true)
          }
        }
      }}
      variant={variant}
      color={color}
      borderBottomLeftRadius={internalOpen && opensUpDownwards ? '0px' : undefined}
      borderBottomRightRadius={internalOpen && opensUpDownwards ? '0px' : undefined}
      borderTopLeftRadius={internalOpen && !opensUpDownwards ? '0px' : undefined}
      borderTopRightRadius={internalOpen && !opensUpDownwards ? '0px' : undefined}
      {...rest}
      intent={rest.intent || intent}
    >
      {children}
    </ActionSurface>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
