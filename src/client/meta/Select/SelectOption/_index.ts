import { ComponentMeta } from 'client/definitions'
import { SelectOptionProps } from 'lib/components'

import { SELECT_OPTION_PROPS_META } from './props'

const SELECT_OPTION_META: ComponentMeta<SelectOptionProps> = {
  overview: {
    bundle: 'core',
    name: 'Select.Option',
    title: 'Represents a single option within Select component.',
    composedOf: ['DropdownList.Item'],
    topLevelTags: ['button'],
  },
  props: SELECT_OPTION_PROPS_META,
}

export { SELECT_OPTION_META }
