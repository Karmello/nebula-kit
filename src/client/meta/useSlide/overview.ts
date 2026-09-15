import type { DocOverview } from 'client/definitions'

export const USE_SLIDE_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Hook for animating directional slide transitions.',
  description:
    'useSlide applies transform-based motion directly to the DOM element referenced by ref, moving it into and out of view from a chosen direction. It is intended for lightweight visibility transitions such as drawers, floating panels, notifications and contextual UI reveals.',
  features: [
    'animates content from the top, right, bottom or left',
    'performs transform-based visibility motion without affecting layout',
    'coordinates enter and exit transitions using visibility state',
    'works well for overlays, drawers, popovers and transient UI',
  ],
}
