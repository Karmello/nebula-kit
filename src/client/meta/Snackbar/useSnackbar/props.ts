import { ComponentMeta } from 'client/definitions'
import { CALLOUT_STATUSES, DEFAULT_CALLOUT_STATUS } from 'lib/components/core/Callout'
import { DEFAULT_SNACKBAR_PLACEMENT, SNACKBAR_PLACEMENTS, UseSnackbarShowArgs } from 'lib/components/pro/Snackbar'

const USE_SNACKBAR_PROPS_META: ComponentMeta<UseSnackbarShowArgs>['props'] = {
  content: {
    options: ['string'],
    isRequired: true,
    description: 'Message text content displayed in the snackbar.',
  },
  heading: {
    options: ['string'],
    description: 'Overrides default heading of the snackbar message.',
  },
  placement: {
    options: SNACKBAR_PLACEMENTS,
    defaultValue: DEFAULT_SNACKBAR_PLACEMENT,
    description: 'Overrides the default placement for the opened snackbar.',
  },
  status: {
    options: CALLOUT_STATUSES,
    defaultValue: DEFAULT_CALLOUT_STATUS,
    isRequired: true,
    description: 'Defines the message type of the snackbar.',
  },
}

export { USE_SNACKBAR_PROPS_META }
