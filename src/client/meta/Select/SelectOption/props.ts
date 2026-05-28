import { ComponentMeta } from 'client/definitions'
import { ACTION_SURFACE_PROPS_META } from 'client/meta/ActionSurface/props'
import { SelectOptionProps } from 'lib/components'

const SELECT_OPTION_PROPS_META: ComponentMeta<SelectOptionProps>['props'] = {
  children: ACTION_SURFACE_PROPS_META.children,
  value: {
    options: ['string'],
    isRequired: true,
    description: 'Defines value for the option.',
  },
}

export { SELECT_OPTION_PROPS_META }
