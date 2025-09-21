import { ComponentMeta } from 'client/definitions'
import { DEFAULT_DIVIDER_THICKNESS, DividerOwnProps } from 'lib/components/elements/Divider/definitions'

export default [
  {
    name: 'thickness',
    description: 'Controls the stroke weight of the divider.',
    options: ['ScaleValue'],
    defaultValue: String(DEFAULT_DIVIDER_THICKNESS),
    isRequired: false,
    isResponsive: false,
  },
] as ComponentMeta<DividerOwnProps>['ownProps']
