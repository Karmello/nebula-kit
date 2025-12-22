import { FocusTrapProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { FOCUS_TRAP_PROPS_META } from './props'
import { FOCUS_TRAP_EXAMPLES_META } from './examples'

const FOCUS_TRAP_META: ComponentMeta<FocusTrapProps> = {
  overview: {
    bundle: 'pro',
    title: 'Utility for trapping focus within a region.',
    description: [
      'traps keyboard focus within a specific DOM element while active',
      'restores focus to the previously focused element when deactivated',
      'detects ESC key presses and optional outside clicks to request dismissal',
      'adds no extra DOM, returning children unchanged',
      'does not control or infer child focusability, focusable elements are determined by native browser behavior (tabIndex, disabled state and element semantics)',
    ],
  },
  props: FOCUS_TRAP_PROPS_META,
  examples: FOCUS_TRAP_EXAMPLES_META,
}

export default {
  FocusTrap: FOCUS_TRAP_META,
}
