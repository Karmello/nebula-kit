import type { DocOverview } from 'client/definitions'

export const AVATAR_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'User image component with consistent sizing, shape and fallback behavior.',
  features: [
    'fixed size scale with predictable dimensions',
    'round or square shape',
    'optional initials fallback when image is unavailable or fails to load',
    'built-in loading indicator with delay and minimum display time',
  ],
  composedOf: ['Box', 'Image', 'Text', 'Loader'],
  exposedTags: ['div'],
}
