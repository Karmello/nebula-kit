import { SnackbarProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { SNACKBAR_PROPS_META } from './props'
import { SNACKBAR_EXAMPLES_META } from './examples'

import { USE_SNACKBAR_META } from './useSnackbar/_index'

const SNACKBAR_META: ComponentMeta<SnackbarProps> = {
  overview: {
    bundle: 'pro',
    title: 'Floating message element anchored to the viewport.',
    description: [
      'displays short status updates without affecting the page layout',
      'appears above the UI and automatically hides after a short duration',
      'provides six placement regions for displaying messages',
      'managed through a provider and controlled with the "useSnackbar" hook',
    ],
    composedOf: ['Flex', 'Box', 'Callout', 'Button', 'Slide'],
    hooks: ['useSnackbar'],
  },
  props: SNACKBAR_PROPS_META,
  examples: SNACKBAR_EXAMPLES_META,
}

export default {
  Snackbar: SNACKBAR_META,
  useSnackbar: USE_SNACKBAR_META,
}
