import { FocusTrapProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { FOCUS_TRAP_PROPS_META } from './props'
import { FOCUS_TRAP_EXAMPLES_META } from './examples'

const FOCUS_TRAP_META: ComponentMeta<FocusTrapProps> = {
  overview: {
    bundle: 'pro',
    title: 'Utility for trapping keyboard focus within a specific region.',
    features: [
      'traps keyboard focus within a specific DOM element while active',
      'restores focus to the previously focused element when deactivated',
      'detects ESC key presses and optional outside clicks to request dismissal',
      'adds no extra DOM, returning children unchanged',
      'does not manage or infer child focusability - focusable elements are determined by native browser behavior (tabIndex, disabled state and element semantics)',
      'FocusTrap is commonly used for dialogs, modals, popovers and other transient UI that must not allow focus to escape while active',
    ],
  },
  props: FOCUS_TRAP_PROPS_META,
  examples: FOCUS_TRAP_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  FocusTrap: FOCUS_TRAP_META,
}
