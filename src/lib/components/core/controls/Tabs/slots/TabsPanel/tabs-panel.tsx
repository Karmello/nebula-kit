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

  return (
    <Box tagAttrs={tagAttrs} tagRef={tagRef} padding={BUTTON_SIZE_CONFIG.md.paddingLeft}>
      {children}
    </Box>
  )
}

TabsPanel.displayName = 'Tabs.Panel'
