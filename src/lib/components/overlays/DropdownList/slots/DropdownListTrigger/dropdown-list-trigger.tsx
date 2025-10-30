import { cloneElement } from 'react'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DropdownListTriggerProps } from './definitions'
import { useDropdownListContext } from '../../DropdownListProvider'

export const DropdownListTrigger = ({
  // HtmlTag
  children,
}: DropdownListTriggerProps) => {
  const { open, setOpen, setAnimateVisible, triggerRef, inlineSize, variant, intent, size } =
    useDropdownListContext()

  const finalChildren = children as any

  return (
    <Box
      tagRef={triggerRef as any}
      tagAttrs={{
        className: withPrefix('dropdown-list-trigger'),
        'aria-haspopup': 'listbox',
        'aria-expanded': false,
        onClick: () => (open ? setAnimateVisible(false) : setOpen(true)),
        style: { transition: 'none' },
      }}
      inlineSize={inlineSize}
    >
      {cloneElement(finalChildren, {
        ...finalChildren.props,
        tagAttrs: {
          ...finalChildren.props.tagAttrs,
          style: {
            ...finalChildren.props.tagAttrs?.style,
            inlineSize: '100%',
            borderBottomLeftRadius: open ? 0 : undefined,
            borderBottomRightRadius: open ? 0 : undefined,
          },
        },
        variant,
        intent,
        size,
      })}
    </Box>
  )
}

DropdownListTrigger.displayName = 'DropdownList.Trigger'
