import { BOX_META } from 'lib/components/core/Box/meta'
import { CALLOUT_STATUSES, DEFAULT_CALLOUT_STATUS } from 'lib/components/core/Callout'
import { SnackbarProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
  DEFAULT_SNACKBAR_INLINE_SIZE,
  DEFAULT_SNACKBAR_PLACEMENT,
  SNACKBAR_PLACEMENTS,
  UseSnackbarShowArgs,
} from '../definitions'
import { SNACKBAR_CHANGELOG } from './changelog'
import { SNACKBAR_EXAMPLES, USE_SNACKBAR_EXAMPLES } from './examples'

export const SNACKBAR_META = {
  Snackbar: {
    overview: {
      bundle: 'pro',
      title:
        'Floating message container for transient status notifications, anchored to the viewport.',
      features: [
        'displays short, non-intrusive status messages without affecting page layout',
        'appears above the UI and automatically hides after a configurable duration',
        'supports six viewport placement regions',
      ],
      guidelines: [
        'Snackbar must wrap the application root and should be rendered once at the top level',
        'managed by a provider and controlled via the "useSnackbar" hook',
      ],
      composedOf: ['Box', 'Callout', 'Button', 'Slide'],
      hooks: ['useSnackbar'],
    },
    props: {
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
        ...BOX_META.Box.props.inlineSize,
        defaultValue: String(DEFAULT_SNACKBAR_INLINE_SIZE),
        description: 'Logical inline size of the snackbar container.',
      },
      placement: {
        options: SNACKBAR_PLACEMENTS,
        defaultValue: String(DEFAULT_SNACKBAR_PLACEMENT),
        description: 'Defines the default viewport placement for snackbars.',
      },
    },
    examples: SNACKBAR_EXAMPLES,
    changelog: SNACKBAR_CHANGELOG,
  } satisfies ComponentMeta<SnackbarProps>,
  useSnackbar: {
    overview: {
      bundle: 'pro',
      name: 'useSnackbar.show()',
      title: 'Programmatic API for triggering snackbar messages.',
      guidelines: [
        'must be used within a Snackbar provider context',
        'if a Snackbar is already visible, additional calls are ignored',
      ],
    },
    examples: USE_SNACKBAR_EXAMPLES,
    props: {
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
    },
  } satisfies ComponentMeta<UseSnackbarShowArgs>,
}
