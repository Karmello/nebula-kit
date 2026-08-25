import type { Overview } from 'client/definitions'

export const SLIDE_OVERVIEW: Overview = {
  bundle: 'core',
  title: 'Motion component for animating directional slide transitions.',
  description:
    'Slide applies transform-based motion that moves content into and out of view from a chosen direction. It is intended for lightweight visibility transitions such as drawers, floating panels, notifications and contextual UI reveals.',
  features: [
    'animates content from the top, right, bottom or left',
    'performs transform-based visibility motion without affecting layout',
    'coordinates enter and exit transitions using visibility state',
    'works well for overlays, drawers, popovers and transient UI',
  ],
}
