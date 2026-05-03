import { ComponentMeta } from 'client/definitions'
import { SpacerProps } from 'lib/components'
import { TSHIRT_SIZES } from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DEFAULT_SPACER_BLOCK_SIZE } from 'lib/components/core/layout/Spacer'

const SPACER_PROPS_META: ComponentMeta<SpacerProps>['props'] = {
  blockSize: {
    options: [...TSHIRT_SIZES, 'CSS'],
    tooltip: [...TSHIRT_SIZES, 'CSS'],
    defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
    isResponsive: true,
    description: 'Controls the spacer block size using predefined length tokens or any CSS value.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { SPACER_PROPS_META }
