import { Box, DropdownListItemProps } from 'lib/components'

export const DropdownListItem = ({ children, tagRef, tagAttrs }: DropdownListItemProps) => {
  return (
    <Box
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        role: 'option',
      }}
    >
      {children}
    </Box>
  )
}

DropdownListItem.displayName = 'DropdownList.Item'
