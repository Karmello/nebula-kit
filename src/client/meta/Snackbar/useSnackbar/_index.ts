import { ComponentMeta } from 'client/definitions'

import { USE_SNACKBAR_EXAMPLES_META } from './examples'
import { USE_SNACKBAR_PROPS_META } from './props'
import { UseSnackbarShowArgs } from 'lib/components/feedback/Snackbar/definitions'

const USE_SNACKBAR_META: ComponentMeta<UseSnackbarShowArgs> = {
  overview: {
    name: 'useSnackbar.show()',
    title: 'Hook method for programmatically displaying snackbars.',
    description: ['meant to be used inside Snackbar context'],
  },
  examples: USE_SNACKBAR_EXAMPLES_META,
  props: USE_SNACKBAR_PROPS_META,
}

export { USE_SNACKBAR_META }
