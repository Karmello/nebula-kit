import { ComponentMeta } from 'client/definitions'
import { BUTTON_PROPS_META } from 'client/meta/Button/props'
import { TabsTabProps } from 'lib/components'

const TABS_TAB_PROPS_META: ComponentMeta<TabsTabProps>['props'] = {
  children: {
    ...BUTTON_PROPS_META.children,
    isRequired: true,
  },
  customSvgIcon: BUTTON_PROPS_META.customSvgIcon,
  disabled: BUTTON_PROPS_META.disabled,
  iconName: BUTTON_PROPS_META.iconName,
  iconPlacement: BUTTON_PROPS_META.iconPlacement,
  inlineSize: BUTTON_PROPS_META.inlineSize,
  justifyContent: BUTTON_PROPS_META.justifyContent,
  tagAttrs: BUTTON_PROPS_META.tagAttrs,
  tagRef: BUTTON_PROPS_META.tagRef,
  value: {
    options: ['string', 'number'],
    isRequired: true,
    description: 'Value that identifies the tab and links it to its panel.',
  },
}

export { TABS_TAB_PROPS_META }
