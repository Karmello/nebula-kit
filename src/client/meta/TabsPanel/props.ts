import type { TabsPanelProps } from 'lib/components/pro/Tabs/slots/TabsPanel/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TABS_PANEL_PROPS: Record<keyof TabsPanelProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  value: {
    options: ['string', 'number'],
    isRequired: true,
    description: 'Value that identifies the panel and links it to a tab.',
  },
}
