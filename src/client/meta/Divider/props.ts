import { ComponentMeta } from 'client/definitions'
import { DEFAULT_DIVIDER_THICKNESS, DividerOwnProps } from 'lib/components/elements/Divider/definitions'

const DIVIDER_PROPS_META: ComponentMeta<DividerOwnProps>['props'] = {
  thickness: {
    name: 'thickness',
    description: 'Controls the stroke weight of the divider.',
    options: ['ScaleValue'],
    defaultValue: String(DEFAULT_DIVIDER_THICKNESS),
    isRequired: false,
    isResponsive: false,
  },
}

export { DIVIDER_PROPS_META }
