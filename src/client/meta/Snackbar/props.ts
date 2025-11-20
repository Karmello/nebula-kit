import { ComponentMeta } from 'client/definitions'
import { SnackbarProps } from 'lib/components'
import { DEFAULT_SNACKBAR_PLACEMENT, SNACKBAR_PLACEMENTS } from 'lib/components/feedback/Snackbar/definitions'

const SNACKBAR_PROPS_META: ComponentMeta<SnackbarProps>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    description: 'Application component to be wrapped.',
  },
  placement: {
    options: SNACKBAR_PLACEMENTS as never,
    defaultValue: String(DEFAULT_SNACKBAR_PLACEMENT),
    description: 'Defines where the Snackbar appears on the viewport by default.',
  },
}

export { SNACKBAR_PROPS_META }
