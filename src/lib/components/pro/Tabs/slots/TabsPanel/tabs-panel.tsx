import { CONTROL_SIZE_MAP } from 'lib/constants'
import { Box } from 'lib/index.core'
import { TabsPanelProps } from 'lib/index.pro'

import { useTabsContext } from '../../TabsContext'

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
