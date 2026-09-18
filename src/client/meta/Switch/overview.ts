import type { DocOverview } from 'client/definitions'

export const SWITCH_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Form control for toggling a binary on/off state.',
  description:
    'Switch renders the same binary choice as Checkbox but presented as a sliding toggle instead of a tickbox.',
  features: [
    'supports both controlled and uncontrolled modes',
    'animates the thumb into position when toggled',
    'fixed size scale with predictable dimensions',
  ],
  guidelines: [
    'use Switch for a setting that takes effect immediately, use Checkbox when the choice is part of a form submitted or confirmed later',
  ],
  composedOf: ['Box'],
  rendersAs: ['input'],
}
