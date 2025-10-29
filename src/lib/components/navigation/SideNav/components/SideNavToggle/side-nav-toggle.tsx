import { Box, Divider, Button, Spacer } from 'lib/components'

import { useSideNavContext } from '../../SideNavProvider'

export const SideNavToggle = () => {
  const { expandMode, expandedCategories, setExpandedCategories } = useSideNavContext()

  if (expandMode === 'single') {
    return null
  }

  const isAnyCategoryExpanded = Object.values(expandedCategories).some(c => c)

  return (
    <>
      <Box padding={10}>
        <Button
          tagAttrs={{
            onClick: () => {
              setExpandedCategories(state =>
                Object.fromEntries(Object.keys(state).map(id => [id, !isAnyCategoryExpanded]))
              )
            },
            'aria-expanded': isAnyCategoryExpanded,
          }}
          iconName={isAnyCategoryExpanded ? 'list-chevrons-down-up' : 'list-chevrons-up-down'}
          size="xs"
          intent="neutral"
          variant="ghost"
        />
      </Box>
      <Divider />
      <Spacer blockSize={15} />
    </>
  )
}
