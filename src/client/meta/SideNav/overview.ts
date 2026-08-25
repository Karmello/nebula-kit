import type { Overview } from 'client/definitions'

export const SIDE_NAV_OVERVIEW: Overview = {
  bundle: 'pro',
  title:
    'Sidebar navigation component designed specifically for flat and nested navigation with expandable categories.',
  features: [
    'supports flat items and expandable categories for hierarchical navigation',
    'allows single or multiple categories to be expanded at once',
  ],
  guidelines: [
    'designed for use in sidebar layouts such as SplitView.Side',
    'intentionally opinionated and optimized for sidebar navigation, it is not intended as a general-purpose menu component',
    'does not manage selected state internally - active items should be derived from the current route, pathname or query parameters',
  ],
  composedOf: ['Box'],
  exposedTags: ['nav'],
  slots: ['SideNav.Item', 'SideNav.Category'],
}
