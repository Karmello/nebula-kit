import { ComponentProps, ComponentRef, PropsWithoutRef, RefObject } from 'react'

import { ActionSurface } from 'lib/components'
import { ActionSurfaceTag, DEFAULT_ACTION_SURFACE_TAG } from 'lib/components/core/ActionSurface/definitions'
import { withPrefix } from 'lib/helpers'

import { useDropdownListContext } from '../../providers'
import { DEFAULT_DROPDOWN_LIST_TRIGGER_VARIANT, DropdownListTriggerProps } from './definitions'

export const DropdownListTrigger = <T extends ActionSurfaceTag = typeof DEFAULT_ACTION_SURFACE_TAG>({
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
