import type { TabsPanelProps } from 'lib/components/pro/Tabs/slots/TabsPanel/types'
import type { DocProp } from 'client/definitions'

export const TABS_PANEL_PROPS: Record<keyof TabsPanelProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  value: {
    options: ['string', 'number'],
    isRequired: true,
    description: 'Value that identifies the panel and links it to a tab.',
  },
}
