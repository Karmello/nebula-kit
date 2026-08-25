import type { Overview } from 'client/definitions'

export const TOOLBAR_OVERVIEW: Overview = {
  bundle: 'pro',
  title: 'Horizontal bar with Start, Main and End slots for organizing actions and controls.',
  features: [
    'the main section is toggleable in collapsed mode and always visible in inline mode',
    'all drawable Box components inside Toolbar are forced to use square corners',
  ],
  guidelines: [
    'often used inside AppFrame.Header to control navigation and provide additional tools',
    'often paired with ButtonGroup rendered inside the main section',
  ],
  composedOf: ['Box'],
  exposedTags: ['nav'],
  slots: ['Toolbar.Main', 'Toolbar.Start', 'Toolbar.End'],
}
