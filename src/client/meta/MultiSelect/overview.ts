import type { DocOverview } from 'client/definitions'

export const MULTI_SELECT_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title: 'Form control for choosing multiple options from a list.',
  description:
    'MultiSelect allows users to choose any number of values from a predefined list of options while keeping the interface compact. It combines an interactive trigger with a dropdown list, handling selection, positioning and a combined summary label automatically.',
  features: [
    'supports controlled and uncontrolled modes',
    'keeps the dropdown open across selections so multiple options can be picked in one interaction',
    'marks each selected option with a check icon',
    'shows every selected option in the trigger label, joined together',
    'automatic dropdown positioning and viewport collision handling',
    'supports fixed trigger labels via `staticLabel`',
  ],
  composedOf: ['Box', 'Divider', 'Floating', 'Icon', 'Resize', 'Text'],
  slots: ['MultiSelect.Option'],
}
