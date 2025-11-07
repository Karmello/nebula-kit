import { ComponentMeta } from 'client/definitions'
import { TEXT_PROPS_META } from 'client/meta/Text/props'
import { FormLabelProps } from 'lib/components'
import { DEFAULT_FORM_LABEL_INTENT } from 'lib/components/form/Form/slots'

const FORM_LABEL_PROPS_META: ComponentMeta<FormLabelProps>['props'] = {
  bold: TEXT_PROPS_META.bold,
  children: TEXT_PROPS_META.children,
  iconName: TEXT_PROPS_META.iconName,
  iconPosition: TEXT_PROPS_META.iconPosition,
  intent: {
    ...TEXT_PROPS_META.intent,
    defaultValue: String(DEFAULT_FORM_LABEL_INTENT),
  },
  noWrap: TEXT_PROPS_META.noWrap,
  tagAttrs: TEXT_PROPS_META.tagAttrs,
  tagRef: TEXT_PROPS_META.tagRef,
  textAlign: TEXT_PROPS_META.textAlign,
  truncate: TEXT_PROPS_META.truncate,
}

export { FORM_LABEL_PROPS_META }
