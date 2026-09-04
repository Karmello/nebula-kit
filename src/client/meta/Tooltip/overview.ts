import type { DocOverview } from 'client/definitions'

export const TOOLTIP_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Non-interactive overlay for displaying short, contextual information.',
  description:
    'Tooltip displays supplementary information related to another element. It is intended for brief hints, explanations and labels that appear on demand without disrupting the surrounding interface.',
  features: [
    'supports hover and click activation modes',
    'positions itself automatically relative to its trigger',
    'prevents viewport overflow through collision detection',
    'supports automatic dismissal via outside click and Escape key',
    'configurable placement and offset behavior',
  ],
  composedOf: ['Box', 'Fade', 'Floating', 'Text'],
}
