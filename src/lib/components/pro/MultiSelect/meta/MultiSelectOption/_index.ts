import { ComponentMeta } from 'client/definitions'

import { type MultiSelectOptionProps } from '../../slots/MultiSelectOption/definitions'
import { MULTI_SELECT_OPTION_PROPS_META } from './props'

const MULTI_SELECT_OPTION_META: ComponentMeta<MultiSelectOptionProps> = {
  overview: {
    bundle: 'pro',
    name: 'MultiSelect.Option',
    title: 'Represents a single option within MultiSelect component.',
    composedOf: ['DropdownList.Item'],
    topLevelTags: ['button'],
  },
  props: MULTI_SELECT_OPTION_PROPS_META,
}

export { MULTI_SELECT_OPTION_META }
