import { ComponentMeta } from 'client/definitions'
import { SpacerProps } from 'lib/components'
import { SPACINGS } from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DEFAULT_SPACER_BLOCK_SIZE } from 'lib/components/core/layout/Spacer'

const SPACER_PROPS_META: ComponentMeta<SpacerProps>['props'] = {
  blockSize: {
    options: [...SPACINGS, 'CSS'],
    tooltip: [...SPACINGS, 'CSS'],
    defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
    isResponsive: true,
    description: 'Controls the spacer height using predefined spacing tokens or any CSS value',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { SPACER_PROPS_META }
