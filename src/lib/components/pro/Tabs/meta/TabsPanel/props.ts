import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../../core/Box/meta/props'
import { type TabsPanelProps } from '../../slots/TabsPanel/definitions'

const TABS_PANEL_PROPS_META: ComponentMeta<TabsPanelProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  value: {
    options: ['string', 'number'],
    isRequired: true,
    description: 'Value that identifies the panel and links it to a tab.',
  },
}

export { TABS_PANEL_PROPS_META }
