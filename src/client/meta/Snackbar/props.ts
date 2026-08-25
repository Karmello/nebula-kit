import { CALLOUT_STATUSES, DEFAULT_CALLOUT_STATUS } from 'lib/components/core/Callout'
import {
  DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
  DEFAULT_SNACKBAR_INLINE_SIZE,
  DEFAULT_SNACKBAR_PLACEMENT,
  SNACKBAR_PLACEMENTS,
} from 'lib/components/pro/Snackbar/constants'
import { UseSnackbarShowArgs } from 'lib/components/pro/Snackbar/types'
import { SnackbarProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const SNACKBAR_PROPS: Record<keyof SnackbarProps, DocProp> = {
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
    ...BOX_META.props.inlineSize,
    defaultValue: String(DEFAULT_SNACKBAR_INLINE_SIZE),
    description: 'Logical inline size of the snackbar container.',
  },
  placement: {
    options: SNACKBAR_PLACEMENTS,
    defaultValue: String(DEFAULT_SNACKBAR_PLACEMENT),
    description: 'Defines the default viewport placement for snackbars.',
  },
}

export const USE_SNACKBAR_PROPS: Record<keyof UseSnackbarShowArgs, DocProp> = {
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
