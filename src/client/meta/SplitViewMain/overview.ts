import type { DocOverview } from 'client/definitions'

export const SPLIT_VIEW_MAIN_OVERVIEW: DocOverview = {
  bundle: 'pro',
  name: 'SplitView.Main',
  title: 'Defines the main content region of the SplitView layout.',
  features: ['holds the primary content region of the SplitView layout'],
  composedOf: ['Box', 'IconButton', 'Spacer'],
  exposedTags: ['section'],
  slots: ['SplitView.MainBar'],
}
