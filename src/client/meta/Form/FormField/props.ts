import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { FormFieldProps } from 'lib/components'

const FORM_FIELD_PROPS_META: ComponentMeta<FormFieldProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Input', 'Select'],
    isRequired: true,
    description: 'Form field component.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { FORM_FIELD_PROPS_META }
