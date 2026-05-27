import { ActionSurface } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useDropdownListContext } from '../../providers'
import { DropdownListTriggerProps } from './definitions'

export const DropdownListTrigger = ({ children, ...rest }: DropdownListTriggerProps) => {
  const { triggerRef, open, setOpen, setResizeVisible, openOnFocus } = useDropdownListContext()

  return (
    <ActionSurface
      tagRef={triggerRef}
      tagAttrs={{
        className: withPrefix('dropdown-list-trigger'),
        'aria-haspopup': 'listbox',
        'aria-expanded': false,
        onFocus: () => {
          if (openOnFocus && !open) {
            setOpen(true)
          }
        },
        onKeyDown: (e: { key: string; preventDefault: () => void }) => {
          if (e.key === 'Enter') {
            if (!open) {
              e.preventDefault()
              setOpen(true)
            }
          }
        },
      }}
      onClick={() => {
        if (!rest.disabled && !openOnFocus) {
          if (open) {
            setResizeVisible(false)
          } else {
            setOpen(true)
          }
        }
      }}
      {...rest}
    >
      {children}
    </ActionSurface>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
