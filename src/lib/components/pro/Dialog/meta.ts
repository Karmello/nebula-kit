import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK, DEFAULT_DIALOG_SIZE, DIALOG_SIZES, type DialogProps } from './definitions'
import { DIALOG_EXAMPLES } from './examples'
import { type DialogFooterProps } from './slots/DialogFooter/definitions'
import { type DialogHeaderProps } from './slots/DialogHeader/definitions'

export const DIALOG_META = {
  Dialog: {
    overview: {
      bundle: 'pro',
      title: 'Centered modal dialog for interrupting the current user flow.',
      features: [
        'renders above the page using Portal',
        'traps keyboard focus while open for accessibility',
        'supports header, content and footer slots for structured layout',
        'includes an optional close button and configurable dismissal behavior',
        'automatically disables page scrolling while open',
      ],
      composedOf: ['Flex', 'Box', 'Button', 'Scale', 'FocusTrap'],
      exposedTags: ['dialog'],
      slots: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
        isRequired: true,
        description: 'Dialog.Content slot is required. Dialog.Header and Dialog.Footer are optional.',
      },
      closeOnBackdropClick: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK),
        description: 'Controls whether clicking the backdrop closes the dialog. Requires onClose to be provided.',
      },
      onClose: {
        options: ['() => void'],
        description:
          'Called when the dialog requests to close (ESC key, close button or backdrop click when enabled). The parent component must update the "open" prop in response.',
      },
      open: {
        options: ['boolean'],
        isRequired: true,
        description: 'Controls whether the dialog is open.',
      },
      size: {
        options: DIALOG_SIZES,
        defaultValue: DEFAULT_DIALOG_SIZE,
        description: 'Defines the dialog width using predefined size presets.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: DIALOG_EXAMPLES,
    changelog: {
      '0.6.0': ['fixed dialog closing on inside clicks when `closeOnBackdropClick` was enabled'],
      '0.5.0': ['fixed backdrop flicker'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<DialogProps>,
  DialogHeader: {
    overview: {
      bundle: 'pro',
      name: 'Dialog.Header?',
      title: 'Header area of the dialog.',
      features: ['for the dialog title or heading content'],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } satisfies ComponentMeta<DialogHeaderProps>,
  DialogContent: {
    overview: {
      bundle: 'pro',
      name: 'Dialog.Content',
      title: 'Primary content area of the dialog.',
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  },
  DialogFooter: {
    overview: {
      bundle: 'pro',
      name: 'Dialog.Footer?',
      title: 'Footer area of the dialog.',
      features: ['for actions'],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } satisfies ComponentMeta<DialogFooterProps>,
}
