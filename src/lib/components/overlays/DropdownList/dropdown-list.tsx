import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'

import { DropdownListProps } from './definitions'

export const DropdownList = ({
  // HtmlTag
  children,
  tagRef,
  tagAttrs,
}: DropdownListProps) => {
  return (
    <WithSlots
      childrenToVerify={children}
      componentName="DropdownList"
      slotsConfig={[{ name: 'DropdownList.Item', allowMultiple: true, required: true }]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tagRef={tagRef}
            tagAttrs={{
              ...tagAttrs,
              role: 'listbox',
            }}
            intent="neutral"
          >
            {slotsByName['DropdownList.Item']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

DropdownList.displayName = 'DropdownList'
