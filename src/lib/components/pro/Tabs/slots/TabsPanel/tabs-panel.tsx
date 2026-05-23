import { Box } from 'lib/components'
import { CONTROL_SIZE_MAP } from 'lib/definitions'

import { TabsPanelProps } from './definitions'
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
