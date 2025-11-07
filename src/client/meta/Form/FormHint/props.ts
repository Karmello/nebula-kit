import { ComponentMeta } from 'client/definitions'
import { TEXT_PROPS_META } from 'client/meta/Text/props'

import {
  DEFAULT_FORM_HINT_INTENT,
  DEFAULT_FORM_HINT_SCALE,
  FormHintProps,
} from 'lib/components/form/Form/slots'

const FORM_HINT_PROPS_META: ComponentMeta<FormHintProps>['props'] = {
  bold: TEXT_PROPS_META.bold,
  children: TEXT_PROPS_META.children,
  iconName: TEXT_PROPS_META.iconName,
  iconPosition: TEXT_PROPS_META.iconPosition,
  intent: {
    ...TEXT_PROPS_META.intent,
    defaultValue: String(DEFAULT_FORM_HINT_INTENT),
  },
  noWrap: TEXT_PROPS_META.noWrap,
  scale: {
    ...TEXT_PROPS_META.scale,
    defaultValue: String(DEFAULT_FORM_HINT_SCALE),
  },
  tagAttrs: TEXT_PROPS_META.tagAttrs,
  tagRef: TEXT_PROPS_META.tagRef,
  textAlign: TEXT_PROPS_META.textAlign,
  truncate: TEXT_PROPS_META.truncate,
}

export { FORM_HINT_PROPS_META }
