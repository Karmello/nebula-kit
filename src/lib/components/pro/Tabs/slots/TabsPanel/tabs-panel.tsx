import { Box } from 'lib/components'
import { CONTROL_SIZE_MAP } from 'lib/constants'

import { useTabsContext } from '../../TabsContext'
import { TabsPanelProps } from './definitions'

export const TabsPanel = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  // own
  value,
}: TabsPanelProps) => {
  const { currentValue } = useTabsContext()

  if (currentValue !== value) return null

  const isSelected = currentValue === value

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        role: 'tabpanel',
        id: `panel-${value}`,
        'aria-labelledby': `tab-${value}`,
        hidden: !isSelected,
      }}
      tagRef={tagRef}
      overflowX="auto"
      margin={CONTROL_SIZE_MAP.md.paddingInline}
    >
      {children}
    </Box>
  )
}

TabsPanel.displayName = 'Tabs.Panel'
