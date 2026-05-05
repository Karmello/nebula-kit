import { Box } from 'lib/components'
import { BUTTON_SIZE_CONFIG } from 'lib/components/core/controls/Button'

import { TabsPanelProps } from './definitions'
import { useTabsContext } from '../../TabsContext'

export const TabsPanel = ({
  // HtmlTag
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
      margin={BUTTON_SIZE_CONFIG.md.padding}
    >
      {children}
    </Box>
  )
}

TabsPanel.displayName = 'Tabs.Panel'
