import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DropdownListTriggerProps } from './definitions'
import { useDropdownListContext } from '../../components'

export const DropdownListTrigger = ({
  // HtmlTag
  children,
  // Box
  inlineSize,
  disabled,
}: DropdownListTriggerProps) => {
  const { open, setOpen, setResizeVisible, triggerRef, openOnFocus } = useDropdownListContext()

  return (
    <Box
      tagRef={triggerRef as any}
      tagAttrs={{
        className: withPrefix('dropdown-list-trigger'),
        'aria-haspopup': 'listbox',
        'aria-expanded': false,
        onClick: () => {
          if (!openOnFocus) {
            if (open) {
              setResizeVisible(false)
            } else {
              setOpen(true)
            }
          }
        },
        onFocus: () => {
          if (openOnFocus && !open) {
            setOpen(true)
          }
        },
      }}
      display="inline-block"
      inlineSize={inlineSize}
      disabled={disabled}
    >
      {children}
    </Box>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
