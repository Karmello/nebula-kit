import { ComponentMeta } from 'client/definitions'
import { AppFrameProps } from 'lib/components/layouts/AppFrame/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const APP_FRAME_PROPS_META: ComponentMeta<AppFrameProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  stickyHeader: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'keeps the header fixed at the top of the viewport',
  },
}

export { APP_FRAME_PROPS_META }
