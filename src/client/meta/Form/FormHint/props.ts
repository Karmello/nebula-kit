import { ComponentMeta } from 'client/definitions'
import { TEXT_PROPS_META } from 'client/meta/Text/props'
import { WITH_ICON_PROPS_META } from 'client/meta/WithIcon/props'

import { DEFAULT_FORM_HINT_INTENT, FormHintProps } from 'lib/components/pro/form-elements/Form'

const FORM_HINT_PROPS_META: ComponentMeta<FormHintProps>['props'] = {
  bold: TEXT_PROPS_META.bold,
  children: TEXT_PROPS_META.children,
  color: TEXT_PROPS_META.color,
  iconName: TEXT_PROPS_META.iconName,
  iconPlacement: WITH_ICON_PROPS_META.iconPlacement,
  intent: {
    ...TEXT_PROPS_META.intent,
    defaultValue: String(DEFAULT_FORM_HINT_INTENT),
  },
  noWrap: TEXT_PROPS_META.noWrap,
  tagAttrs: TEXT_PROPS_META.tagAttrs,
  tagRef: TEXT_PROPS_META.tagRef,
  textAlign: TEXT_PROPS_META.textAlign,
  truncate: TEXT_PROPS_META.truncate,
}

export { FORM_HINT_PROPS_META }
