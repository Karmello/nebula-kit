import { ComponentMeta } from 'client/definitions'

import { ACTION_SURFACE_PROPS_META } from '../../../ActionSurface/meta/props'
import { type SelectOptionProps } from '../../SelectOption/types'

const SELECT_OPTION_PROPS_META: ComponentMeta<SelectOptionProps>['props'] = {
  children: ACTION_SURFACE_PROPS_META.children,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}

export { SELECT_OPTION_PROPS_META }
