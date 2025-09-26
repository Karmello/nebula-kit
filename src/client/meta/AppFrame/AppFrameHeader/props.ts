import { ComponentMeta } from 'client/definitions'
import { AppFrameHeaderProps } from 'lib/components'
import { BUTTON_SIZE_CONFIG, DEFAULT_BUTTON_SIZE } from 'lib/components/controls/Button/definitions'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'
import { BoxIntent } from 'lib/components/base/Box/definitions'

const APP_FRAME_HEADER_PROPS_META: ComponentMeta<AppFrameHeaderProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: 'secondary' as BoxIntent,
  },
  minBlockSize: {
    ...BOX_PROPS_META.minBlockSize,
    defaultValue: String(BUTTON_SIZE_CONFIG[DEFAULT_BUTTON_SIZE].blockSize),
  },
}

export { APP_FRAME_HEADER_PROPS_META }
