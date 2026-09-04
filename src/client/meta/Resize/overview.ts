import type { DocOverview } from 'client/definitions'

export const RESIZE_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Motion component for animating layout size.',
  description:
    'Resize animates layout-affecting expand and collapse motion by measuring content and transitioning block or inline size.',
  features: [
    'animates block or inline size using measured content dimensions',
    'supports expand and collapse motion for panels, accordions and content reveals',
    'keeps layout motion explicit without hard-coded sizes',
  ],
  composedOf: ['Box'],
  exposedTags: ['div'],
}
