import { Box, Divider, IconButton, Spacer } from 'lib/index.core'

import { useSideNavContext } from '../../SideNavProvider'

export const SideNavToggle = () => {
  const { expandMode, expandedCategories, setExpandedCategories } = useSideNavContext()

  if (expandMode === 'single') {
    return null
  }

  const isAnyCategoryExpanded = Object.values(expandedCategories).some(c => c)

  return (
    <>
      <Box padding="10px">
        <IconButton
          tagAttrs={{
            'aria-expanded': isAnyCategoryExpanded,
          }}
          iconName={isAnyCategoryExpanded ? 'list-chevrons-down-up' : 'list-chevrons-up-down'}
          size="xs"
          onClick={() => {
            setExpandedCategories(state => Object.fromEntries(Object.keys(state).map(id => [id, !isAnyCategoryExpanded])))
          }}
        />
      </Box>
      <Divider />
      <Spacer blockSize="16px" />
    </>
  )
}
