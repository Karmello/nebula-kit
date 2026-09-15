import type { DocOverview } from 'client/definitions'

export const PASSWORD_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Secure text input with built-in password visibility toggle.',
  description:
    'Handles password entry with optional reveal functionality for improving usability during authentication flows.',
  features: [
    'built-in password visibility toggle',
    'preserves native password input semantics',
    'supports both controlled and uncontrolled modes',
  ],
  composedOf: ['Box', 'IconButton', 'Input'],
  exposedTags: ['input'],
}
