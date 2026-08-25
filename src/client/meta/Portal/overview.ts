import type { Overview } from 'client/definitions'

export const PORTAL_OVERVIEW: Overview = {
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
}
