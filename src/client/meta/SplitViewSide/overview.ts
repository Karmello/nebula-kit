import type { DocOverview } from 'client/definitions'

export const SPLIT_VIEW_SIDE_OVERVIEW: DocOverview = {
  bundle: 'pro',
  name: 'SplitView.Side',
  title: 'Defines the side panel region of the SplitView layout.',
  features: [
    'traps keyboard focus when the side panel is rendered in overlay mode',
    'automatically renders a close action when displayed in overlay mode',
  ],
  guidelines: ['typically used for navigation, menus or supplementary content'],
  composedOf: ['Box', 'FocusTrap', 'IconButton', 'Resize'],
  exposedTags: ['aside'],
}
