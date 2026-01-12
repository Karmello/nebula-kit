import { SnackbarProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { SNACKBAR_PROPS_META } from './props'
import { SNACKBAR_EXAMPLES_META } from './examples'

import { USE_SNACKBAR_META } from './useSnackbar/_index'

const SNACKBAR_META: ComponentMeta<SnackbarProps> = {
  overview: {
    bundle: 'pro',
    title: 'Floating message container for transient status notifications, anchored to the viewport.',
    features: [
      'displays short, non-intrusive status messages without affecting page layout',
      'appears above the UI and automatically hides after a configurable duration',
      'supports six viewport placement regions',
      'managed by a provider and controlled via the "useSnackbar" hook',
      'Snackbar must wrap the application root and should be rendered once at the top level',
    ],
    composedOf: ['Flex', 'Box', 'Callout', 'Button', 'Slide'],
    hooks: ['useSnackbar'],
  },
  props: SNACKBAR_PROPS_META,
  examples: SNACKBAR_EXAMPLES_META,
  changelog: {
    '0.2.3': ['Released'],
  },
}

export default {
  Snackbar: SNACKBAR_META,
  useSnackbar: USE_SNACKBAR_META,
}
