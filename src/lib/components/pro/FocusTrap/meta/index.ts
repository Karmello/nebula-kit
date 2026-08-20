import { ComponentMeta } from 'client/definitions'

import { HTML_TAG_META } from '../../../core/HtmlTag/meta'
import { DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK, type FocusTrapProps } from '../definitions'
import { FOCUS_TRAP_EXAMPLES } from './examples'

export const FOCUS_TRAP_META = {
  FocusTrap: {
    overview: {
      bundle: 'pro',
      title: 'Utility for trapping keyboard focus within a specific region.',
      features: [
        'traps keyboard focus within a specific DOM element while active',
        'restores focus to the previously focused element when deactivated',
        'detects ESC key presses and optional outside clicks to request dismissal',
        'adds no extra DOM, returning children unchanged',
      ],
      guidelines: [
        'does not manage or infer child focusability - focusable elements are determined by native browser behavior (tabIndex, disabled state and element semantics)',
        'commonly used for dialogs, modals, popovers and other transient UI that must not allow focus to escape while active',
      ],
    },
    props: {
      active: {
        options: ['boolean'],
        isRequired: true,
        description: 'Enables or disables the focus trap.',
      },
      children: {
        ...HTML_TAG_META.HtmlTag.props.children,
        isRequired: true,
        description: 'Content whose focus is controlled by the trap.',
      },
      disableEscapeOnOutsideClick: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK),
        description: 'Prevents outside clicks from being treated as escape attempts.',
      },
      onFocusEscape: {
        options: ['() => void'],
        description: 'Called when the user attempts to exit the trapped region (ESC key or clicking outside).',
      },
      tagRef: {
        ...HTML_TAG_META.HtmlTag.props.tagRef,
        isRequired: true,
        description: 'Ref to the DOM element that the trap should contain focus within.',
      },
    },
    examples: FOCUS_TRAP_EXAMPLES,
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<FocusTrapProps>,
}
