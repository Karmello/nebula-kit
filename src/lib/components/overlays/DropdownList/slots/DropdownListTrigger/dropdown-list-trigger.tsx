import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DropdownListTriggerProps } from './definitions'
import { useDropdownListContext } from '../../DropdownListProvider'

export const DropdownListTrigger = ({
  // HtmlTag
  children,
  // Box
  inlineSize,
}: DropdownListTriggerProps) => {
  const { open, setOpen, setResizeVisible, triggerRef } = useDropdownListContext()

  return (
    <Box
      tagRef={triggerRef as any}
      tagAttrs={{
        className: withPrefix('dropdown-list-trigger'),
        'aria-haspopup': 'listbox',
        'aria-expanded': false,
        onClick: () => (open ? setResizeVisible(false) : setOpen(true)),
      }}
      display="inline-block"
      inlineSize={inlineSize}
    >
      {children}
    </Box>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
