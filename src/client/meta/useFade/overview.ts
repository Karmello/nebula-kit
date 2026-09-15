import type { DocOverview } from 'client/definitions'

export const USE_FADE_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Hook for animating opacity transitions.',
  description:
    'useFade applies opacity-based motion directly to the DOM element referenced by tagRef, smoothly transitioning it between visible and hidden states. It is intended for lightweight visual transitions such as overlays, tooltips, floating UI and subtle content reveals.',
  features: [
    'animates visibility using opacity transitions',
    'performs visual-only motion without affecting layout',
    'coordinates enter and exit visibility states',
    'works well for overlays, tooltips, popovers and transient UI',
  ],
}
