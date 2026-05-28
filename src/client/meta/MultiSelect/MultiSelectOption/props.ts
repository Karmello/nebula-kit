import { ComponentMeta } from 'client/definitions'
import { ACTION_SURFACE_PROPS_META } from 'client/meta/ActionSurface/props'
import { MultiSelectOptionProps } from 'lib/components'

const MULTI_SELECT_OPTION_PROPS_META: ComponentMeta<MultiSelectOptionProps>['props'] = {
  children: ACTION_SURFACE_PROPS_META.children,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}

export { MULTI_SELECT_OPTION_PROPS_META }
