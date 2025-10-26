import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DropdownListTriggerProps } from './definitions'
import { useDropdownListContext } from '../../DropdownListProvider'

export const DropdownListTrigger = ({
  // HtmlTag
  children,
}: DropdownListTriggerProps) => {
  const { open, setOpen, setAnimateVisible, triggerRef, inlineSize } = useDropdownListContext()

  return (
    <Box
      tagRef={triggerRef}
      tagAttrs={{
        className: withPrefix('dropdown-list-trigger'),
        'aria-haspopup': 'listbox',
        'aria-expanded': false,
        onClick: () => (open ? setAnimateVisible(false) : setOpen(true)),
        style: { transition: 'none' },
      }}
      inlineSize={inlineSize}
    >
      {children}
    </Box>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
