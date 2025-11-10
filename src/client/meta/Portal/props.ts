import { ComponentMeta } from 'client/definitions'
import { DEFAULT_PORTAL_PLACEMENT, PORTAL_PLACEMENTS, PortalProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const PORTAL_PROPS_META: ComponentMeta<PortalProps>['props'] = {
  anchorRef: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Reference to the element the portal content is positioned relative to.',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content rendered inside Portal.',
  },
  placement: {
    options: PORTAL_PLACEMENTS as unknown as string[],
    defaultValue: DEFAULT_PORTAL_PLACEMENT,
    description: 'Defines the position of the portal content relative to the anchor element.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { PORTAL_PROPS_META }
