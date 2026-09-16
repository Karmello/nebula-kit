import type { TabsTabProps } from 'lib/components/pro/Tabs/slots/TabsTab/types'
import type { DocProp } from 'client/definitions'

export const TABS_TAB_PROPS: Record<keyof TabsTabProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  disabled: {
    options: ['boolean'],
  },
  value: {
    options: ['string', 'number'],
    isRequired: true,
    description: 'Value that identifies the tab and links it to its panel.',
  },
}
