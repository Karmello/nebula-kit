import type { Overview } from 'client/definitions'

export const SPLIT_VIEW_MAIN_BAR_OVERVIEW: Overview = {
  bundle: 'pro',
  name: 'SplitView.MainBar?',
  title: 'Defines the horizontal region displayed above the main content',
  features: ['can contain any custom content, such as breadcrumbs or other controls'],
  guidelines: ['should be placed inside SplitView.Main slot'],
  composedOf: ['Box'],
  exposedTags: ['div'],
}
