import type { DocOverview } from 'client/definitions'

export const SELECT_OPTION_OVERVIEW: DocOverview = {
  bundle: 'core',
  name: 'Select.Option',
  title: 'Represents a selectable item within a Select dropdown list.',
  description:
    'Select.Option defines an available choice within a Select component. Each option provides a value used for selection and renders the content displayed to the user inside the dropdown list.',
  composedOf: ['Box', 'Text', 'Divider'],
  exposedTags: ['button'],
}
