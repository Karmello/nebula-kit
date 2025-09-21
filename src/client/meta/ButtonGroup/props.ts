import { ComponentMeta } from 'client/definitions'
import { ButtonGroupDirection, ButtonGroupOwnProps } from 'lib/components/controls/ButtonGroup/definitions'

const BUTTON_GROUP_PROPS_META: ComponentMeta<ButtonGroupOwnProps>['props'] = {
  direction: {
    name: 'direction',
    options: Object.values(ButtonGroupDirection),
    defaultValue: ButtonGroupDirection[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls whether buttons are arranged horizontally or vertically.',
  },
  stretch: {
    name: 'stretch',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: true,
    description: 'Makes all grouped buttons expand to fill the available space evenly.',
  },
  attached: {
    name: 'attached',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Removes spacing between buttons so they appear as a single connected element.',
  },
}

export { BUTTON_GROUP_PROPS_META }
