import type { DocOverview } from 'client/definitions'

export const FOCUS_TRAP_OVERVIEW: DocOverview = {
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
}
