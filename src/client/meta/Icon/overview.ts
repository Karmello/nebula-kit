import type { DocOverview } from 'client/definitions'

export const ICON_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'SVG icon wrapped in a styled inline container.',
  features: [
    'exposes a curated subset of icons from "Lucide React"',
    'allows rendering a custom SVG icon via children while preserving semantic styling',
  ],
  exposedTags: ['span'],
  readMoreLink: {
    label: 'See all available icons',
    href: '/foundations/resources/assets/icons',
  },
}
