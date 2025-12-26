import { ComponentMeta } from 'client/definitions'
import { UseSnackbarShowArgs } from 'lib/components/pro/feedback/Snackbar'

import { USE_SNACKBAR_EXAMPLES_META } from './examples'
import { USE_SNACKBAR_PROPS_META } from './props'

const USE_SNACKBAR_META: ComponentMeta<UseSnackbarShowArgs> = {
  overview: {
    name: 'useSnackbar.show()',
    title: 'Programmatic API for triggering snackbar messages.',
    description: [
      'must be used within a Snackbar provider context',
      'if a Snackbar is already visible, additional calls are ignored',
    ],
  },
  examples: USE_SNACKBAR_EXAMPLES_META,
  props: USE_SNACKBAR_PROPS_META,
}

export { USE_SNACKBAR_META }
