import { ComponentMeta } from 'client/definitions'
import { SpacerProps } from 'lib/components'
import { DEFAULT_SPACER_BLOCK_SIZE } from 'lib/components/layout/Spacer/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const SPACER_PROPS_META: ComponentMeta<SpacerProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  blockSize: {
    ...BOX_PROPS_META.blockSize,
    defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
    description: 'Thickness.',
  },
}

export { SPACER_PROPS_META }
