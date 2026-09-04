import type { DocOverview } from 'client/definitions'

export const DIALOG_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Centered modal dialog for interrupting the current user flow.',
  features: [
    'renders above the page using Portal',
    'traps keyboard focus while open for accessibility',
    'supports header, content and footer slots for structured layout',
    'includes an optional close button and configurable dismissal behavior',
    'automatically disables page scrolling while open',
  ],
  composedOf: ['Box', 'FocusTrap', 'IconButton', 'Portal', 'Scale'],
  exposedTags: ['dialog'],
  slots: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
}
