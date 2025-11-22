import { ComponentMeta } from 'client/definitions'
import { SnackbarProps } from 'lib/components'

import {
  DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
  DEFAULT_SNACKBAR_MAX_INLINE_SIZE,
  DEFAULT_SNACKBAR_PLACEMENT,
  SNACKBAR_PLACEMENTS,
} from 'lib/components/feedback/Snackbar/definitions'

import { BOX_PROPS_META } from '../Box/props'

const SNACKBAR_PROPS_META: ComponentMeta<SnackbarProps>['props'] = {
  autoCloseDelay: {
    options: ['number'],
    defaultValue: String(DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY),
    description: 'Time in milliseconds before the snackbar closes automatically.',
  },
  children: {
    options: ['ReactElement'],
    isRequired: true,
    description: 'Application component to be wrapped.',
  },
  closeOnOutsideClick: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK),
    description: 'Makes snackbar close when the user clicks anywhere outside of it.',
  },
  maxInlineSize: {
    ...BOX_PROPS_META.maxInlineSize,
    defaultValue: JSON.stringify(DEFAULT_SNACKBAR_MAX_INLINE_SIZE),
  },
  placement: {
    options: SNACKBAR_PLACEMENTS as never,
    defaultValue: String(DEFAULT_SNACKBAR_PLACEMENT),
    description: 'Defines where snackbars appear on the viewport by default.',
  },
}

export { SNACKBAR_PROPS_META }
