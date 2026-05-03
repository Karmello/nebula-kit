import { ComponentMeta } from 'client/definitions'
import { SpacerProps } from 'lib/components'
import { SIZES } from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DEFAULT_SPACER_SIZE } from 'lib/components/core/layout/Spacer'

const SPACER_PROPS_META: ComponentMeta<SpacerProps>['props'] = {
  size: {
    options: SIZES,
    tooltip: SIZES,
    defaultValue: String(DEFAULT_SPACER_SIZE),
    isResponsive: true,
    description: 'Predefined spacer height from the spacing scale.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { SPACER_PROPS_META }
