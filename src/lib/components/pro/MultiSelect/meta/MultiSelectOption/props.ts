import { ComponentMeta } from 'client/definitions'

import { ACTION_SURFACE_PROPS_META } from '../../../../core/ActionSurface/meta/props'
import { type MultiSelectOptionProps } from '../../slots/MultiSelectOption/definitions'

const MULTI_SELECT_OPTION_PROPS_META: ComponentMeta<MultiSelectOptionProps>['props'] = {
  children: ACTION_SURFACE_PROPS_META.children,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}

export { MULTI_SELECT_OPTION_PROPS_META }
