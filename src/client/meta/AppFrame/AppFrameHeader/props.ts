import { ComponentMeta } from 'client/definitions'
import { AppFrameHeaderProps } from 'lib/components'

import { DEFAULT_APP_FRAME_HEADER_INTENT } from 'lib/components/core/AppFrame'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'

const APP_FRAME_HEADER_PROPS_META: ComponentMeta<AppFrameHeaderProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { APP_FRAME_HEADER_PROPS_META }
