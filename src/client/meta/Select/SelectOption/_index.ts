import { ComponentMeta } from 'client/definitions'
import { SelectOptionProps } from 'lib/components'

import { SELECT_OPTION_PROPS_META } from './props'

const SELECT_OPTION_META: ComponentMeta<SelectOptionProps> = {
  overview: {
    bundle: 'core',
    name: 'Select.Option',
    title: 'Represents a selectable item within a Select dropdown list.',
    description:
      'Select.Option defines an available choice within a Select component. Each option provides a value used for selection and renders the content displayed to the user inside the dropdown list.',
    composedOf: ['ActionSurface', 'Text', 'Divider'],
    topLevelTags: ['button'],
  },
  props: SELECT_OPTION_PROPS_META,
}

export { SELECT_OPTION_META }
