import { ComponentMeta } from 'client/definitions'
import { PortalProps } from 'lib/components'
import { DEFAULT_PORTAL_PLACEMENT, PORTAL_PLACEMENTS } from 'lib/components/core/utility/Portal'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const PORTAL_PROPS_META: ComponentMeta<PortalProps>['props'] = {
  anchorRef: {
    options: ['RefObject'],
    description:
      'Reference to the element the portal should position itself relative to. When omitted the portal renders at the root without applying any positioning.',
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
