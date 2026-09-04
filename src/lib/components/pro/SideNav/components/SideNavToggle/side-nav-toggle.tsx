import { Box } from 'lib/components/core/Box'
import { HorizontalRule } from 'lib/components/core/HorizontalRule'
import { IconButton } from 'lib/components/core/IconButton'
import { Spacer } from 'lib/components/core/Spacer'

import { useSideNavContext } from '../../providers/SideNavProvider'

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
          scale="xs"
          onClick={() => {
            setExpandedCategories(state =>
              Object.fromEntries(Object.keys(state).map(id => [id, !isAnyCategoryExpanded]))
            )
          }}
        />
      </Box>
      <HorizontalRule />
      <Spacer blockSize="16px" />
    </>
  )
}
