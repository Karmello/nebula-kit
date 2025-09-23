import { ComponentMeta } from 'client/definitions'
import { DEFAULT_DIVIDER_THICKNESS, DividerProps } from 'lib/components/elements/Divider/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const DIVIDER_PROPS_META: ComponentMeta<DividerProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: {
    ...BOX_PROPS_META.intent,
    isResponsive: false,
  },
  thickness: {
    description: 'Controls the stroke weight of the divider.',
    options: ['ScaleValue'],
    defaultValue: String(DEFAULT_DIVIDER_THICKNESS),
    isRequired: false,
    isResponsive: false,
  },
}

export { DIVIDER_PROPS_META }
