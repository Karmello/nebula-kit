import { ComponentMeta } from 'client/definitions'
import { AppFrameHeaderProps } from 'lib/components'

import { DEFAULT_APP_FRAME_HEADER_INTENT } from 'lib/components/core/AppFrame'

import { BOX_PROPS_META } from '../../Box/props'

const APP_FRAME_HEADER_PROPS_META: ComponentMeta<AppFrameHeaderProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { APP_FRAME_HEADER_PROPS_META }
