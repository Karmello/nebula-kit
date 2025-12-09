import { ComponentMeta } from 'client/definitions'
import { CALLOUT_STATUSES, DEFAULT_CALLOUT_STATUS } from 'lib/components/core/feedback/Callout'

import {
  DEFAULT_SNACKBAR_PLACEMENT,
  SNACKBAR_PLACEMENTS,
  UseSnackbarShowArgs,
} from 'lib/components/pro/feedback/Snackbar'

const USE_SNACKBAR_PROPS_META: ComponentMeta<UseSnackbarShowArgs>['props'] = {
  content: {
    options: ['string'],
    isRequired: true,
    description: 'Snackbar message text content to be displayed.',
  },
  heading: {
    options: ['string'],
    description: 'Overrides default heading of the snackbar message.',
  },
  placement: {
    options: SNACKBAR_PLACEMENTS as never,
    defaultValue: DEFAULT_SNACKBAR_PLACEMENT,
    description: 'Defines placement for the snackbar being opened.',
  },
  status: {
    options: CALLOUT_STATUSES as never,
    defaultValue: DEFAULT_CALLOUT_STATUS,
    isRequired: true,
    description: 'Defines the semantic meaning for the snackbar being opened.',
  },
}

export { USE_SNACKBAR_PROPS_META }
