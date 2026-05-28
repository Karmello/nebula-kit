import { ActionSurface } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useDropdownListContext } from '../../providers'
import { DropdownListTriggerProps } from './definitions'

export const DropdownListTrigger = ({ children, ...rest }: DropdownListTriggerProps) => {
  const { triggerRef, internalOpen, setInternalOpen, setResizeVisible, openOnFocus, floatingResolved, color, intent } =
    useDropdownListContext()

  const opensUpDownwards = ['bottom-start', 'bottom-end', undefined].includes(floatingResolved?.placement)

  return (
    <ActionSurface
      tagRef={triggerRef}
      tagAttrs={{
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
      }}
      onClick={() => {
        if (!rest.disabled && !openOnFocus) {
          if (internalOpen) {
            setResizeVisible(false)
          } else {
            setInternalOpen(true)
          }
        }
      }}
      variant="solid"
      color={color}
      intent={intent}
      borderBottomLeftRadius={internalOpen && opensUpDownwards ? '0px' : undefined}
      borderBottomRightRadius={internalOpen && opensUpDownwards ? '0px' : undefined}
      borderTopLeftRadius={internalOpen && !opensUpDownwards ? '0px' : undefined}
      borderTopRightRadius={internalOpen && !opensUpDownwards ? '0px' : undefined}
      {...rest}
    >
      {children}
    </ActionSurface>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
