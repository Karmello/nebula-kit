import type { TabsTabProps } from 'lib/components/pro/Tabs/slots/TabsTab/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TABS_TAB_PROPS: Record<keyof TabsTabProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  disabled: {
    options: ['boolean'],
  },
  minInlineSize: {
    ...BOX_META.props.minInlineSize,
    isResponsive: false,
  },
  value: {
    options: ['string', 'number'],
    isRequired: true,
    description: 'Value that identifies the tab and links it to its panel.',
  },
}
