import { HTML_TAG_META } from 'lib/components/core/HtmlTag/meta'
import { ComponentMeta } from 'client/definitions'

import { PORTAL_PLACEMENTS, type PortalProps } from '../definitions'
import { DEFAULT_PORTAL_PLACEMENT } from '../portal'
import { PORTAL_CHANGELOG } from './changelog'
import { PORTAL_EXAMPLES } from './examples'

export const PORTAL_META = {
  Portal: {
    overview: {
      bundle: 'core',
      title: 'Low-level utility component for rendering content outside the normal document flow.',
      description:
        'Portal is a low-level utility component for rendering content outside the normal document flow, allowing UI elements to escape layout and stacking constraints while remaining visually connected to their trigger. When an anchorRef is provided, Portal also handles positioning and continuously tracks the anchor element to keep the content aligned during scrolling, layout changes and animations. This requires work to be performed on every frame while the Portal is mounted. Because of this, Portal should always be conditionally rendered, so that this work only runs while the content is visible.',
      features: [
        'renders children into a separate DOM node detached from the parent hierarchy',
        'enables floating UI patterns that must escape layout and stacking constraints',
        'supports positioning relative to an anchor element when needed',
        'serves as the foundation for dropdowns modals tooltips and other overlay components',
      ],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      anchorRef: {
        options: ['RefObject'],
        description:
          'Reference to an element the portal positions itself relative to. When omitted the portal renders at the root without applying positioning.',
      },
      children: {
        ...HTML_TAG_META.HtmlTag.props.children,
        isRequired: true,
        description: 'Content rendered inside the portal.',
      },
      offset: {
        options: ['number'],
        description:
          'Defines the distance (px) between the anchor element and the portal content along the placement axis.',
      },
      placement: {
        options: PORTAL_PLACEMENTS,
        defaultValue: DEFAULT_PORTAL_PLACEMENT,
        description: 'Defines the position of the portal content relative to the anchor element.',
      },
      tagAttrs: HTML_TAG_META.HtmlTag.props.tagAttrs,
      tagRef: HTML_TAG_META.HtmlTag.props.tagRef,
    },
    examples: PORTAL_EXAMPLES,
    changelog: PORTAL_CHANGELOG,
  } satisfies ComponentMeta<PortalProps>,
}
