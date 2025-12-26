import { ComponentMeta } from 'client/definitions'
import { SnackbarProps } from 'lib/components'

import {
  DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
  DEFAULT_SNACKBAR_INLINE_SIZE,
  DEFAULT_SNACKBAR_PLACEMENT,
  SNACKBAR_PLACEMENTS,
} from 'lib/components/pro/feedback/Snackbar'

import { BOX_PROPS_META } from '../Box/props'

const SNACKBAR_PROPS_META: ComponentMeta<SnackbarProps>['props'] = {
  autoCloseDelay: {
    options: ['number'],
    defaultValue: String(DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY),
    description: 'Time in milliseconds after which the snackbar closes automatically.',
  },
  children: {
    options: ['ReactElement'],
    isRequired: true,
    description: 'Root application content wrapped by the Snackbar provider instance.',
  },
  closeOnOutsideClick: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK),
    description: 'Closes the snackbar when the user clicks outside of its surface.',
  },
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: String(DEFAULT_SNACKBAR_INLINE_SIZE),
    description: 'Logical inline size of the snackbar container.',
  },
  placement: {
    options: SNACKBAR_PLACEMENTS as never,
    defaultValue: String(DEFAULT_SNACKBAR_PLACEMENT),
    description: 'Defines the default viewport placement for snackbars.',
  },
}

export { SNACKBAR_PROPS_META }
