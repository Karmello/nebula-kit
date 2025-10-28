import { ComponentMeta } from 'client/definitions'
import { AppFrameHeaderProps } from 'lib/components'

import {
  DEFAULT_APP_FRAME_HEADER_BORDER_INTENT,
  DEFAULT_APP_FRAME_HEADER_INTENT,
} from 'lib/components/layouts/AppFrame/slots/AppFrameHeader/definitions'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'

const APP_FRAME_HEADER_PROPS_META: ComponentMeta<AppFrameHeaderProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
  },
  borderIntent: {
    ...BOX_PROPS_META.borderIntent,
    defaultValue: String(DEFAULT_APP_FRAME_HEADER_BORDER_INTENT),
  },
}

export { APP_FRAME_HEADER_PROPS_META }
