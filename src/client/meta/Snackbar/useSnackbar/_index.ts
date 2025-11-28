import { ComponentMeta } from 'client/definitions'

import { USE_SNACKBAR_EXAMPLES_META } from './examples'
import { USE_SNACKBAR_PROPS_META } from './props'
import { UseSnackbarShowArgs } from 'lib/components/core/feedback/Snackbar/definitions'

const USE_SNACKBAR_META: ComponentMeta<UseSnackbarShowArgs> = {
  overview: {
    name: 'useSnackbar.show()',
    title: 'Hook method for programmatically displaying snackbars.',
    description: [
      'meant to be used inside Snackbar context',
      "new Snackbar shows up only if there's none open at a time, otherwise it gets ignored",
    ],
  },
  examples: USE_SNACKBAR_EXAMPLES_META,
  props: USE_SNACKBAR_PROPS_META,
}

export { USE_SNACKBAR_META }
