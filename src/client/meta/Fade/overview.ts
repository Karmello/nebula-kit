import type { Overview } from 'client/definitions'

export const FADE_OVERVIEW: Overview = {
  bundle: 'pro',
  title: 'Motion component for animating opacity transitions.',
  description:
    'Fade applies opacity-based motion that smoothly transitions content between visible and hidden states. It is intended for lightweight visual transitions such as overlays, tooltips, floating UI and subtle content reveals.',
  features: [
    'animates visibility using opacity transitions',
    'performs visual-only motion without affecting layout',
    'coordinates enter and exit visibility states',
    'works well for overlays, tooltips, popovers and transient UI',
  ],
  composedOf: ['Box'],
  exposedTags: ['span'],
}
