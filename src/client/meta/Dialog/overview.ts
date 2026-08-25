import type { Overview } from 'client/definitions'

export const DIALOG_OVERVIEW: Overview = {
  bundle: 'pro',
  title: 'Centered modal dialog for interrupting the current user flow.',
  features: [
    'renders above the page using Portal',
    'traps keyboard focus while open for accessibility',
    'supports header, content and footer slots for structured layout',
    'includes an optional close button and configurable dismissal behavior',
    'automatically disables page scrolling while open',
  ],
  composedOf: ['Box', 'Button', 'Scale', 'FocusTrap'],
  exposedTags: ['dialog'],
  slots: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
}
