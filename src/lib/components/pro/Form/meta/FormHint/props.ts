import { ComponentMeta } from 'client/definitions'

import { TEXT_PROPS_META } from '../../../../core/Text/meta/props'
import { WITH_ICON_PROPS_META } from '../../../../core/WithIcon/meta/props'
import { DEFAULT_FORM_HINT_INTENT, type FormHintProps } from '../../slots/FormHint/definitions'

const FORM_HINT_PROPS_META: ComponentMeta<FormHintProps>['props'] = {
  bold: TEXT_PROPS_META.bold,
  children: TEXT_PROPS_META.children,
  color: TEXT_PROPS_META.color,
  iconName: WITH_ICON_PROPS_META.iconName,
  iconPlacement: WITH_ICON_PROPS_META.iconPlacement,
  intent: {
    ...TEXT_PROPS_META.intent,
    defaultValue: String(DEFAULT_FORM_HINT_INTENT),
  },
  noWrap: TEXT_PROPS_META.noWrap,
  tagAttrs: TEXT_PROPS_META.tagAttrs,
  tagRef: TEXT_PROPS_META.tagRef,
  truncate: TEXT_PROPS_META.truncate,
}

export { FORM_HINT_PROPS_META }
