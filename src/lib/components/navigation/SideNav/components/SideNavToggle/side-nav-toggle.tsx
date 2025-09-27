import { Box, IconButton } from 'lib/components'

import { useSideNavContext } from '../../SideNavProvider'

export const SideNavToggle = () => {
  const { expandMode, expandedCategories, setExpandedCategories } = useSideNavContext()

  if (expandMode === 'single') {
    return null
  }

  const isAnyCategoryExpanded = Object.values(expandedCategories).some(c => c)

  return (
    <Box padding={5}>
      <IconButton
        tagAttrs={{
          onClick: () => {
            setExpandedCategories(state =>
              Object.fromEntries(Object.keys(state).map(id => [id, !isAnyCategoryExpanded]))
            )
          },
        }}
        iconName={isAnyCategoryExpanded ? 'list-chevrons-down-up' : 'list-chevrons-up-down'}
        size="xs"
      />
    </Box>
  )
}
