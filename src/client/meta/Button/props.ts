import { ComponentMeta } from 'client/definitions'
import { ButtonOwnProps, ButtonSize, DEFAULT_BUTTON_SIZE } from 'lib/components/controls/Button/definitions'

export default {
  size: {
    name: 'size',
    options: Object.values(ButtonSize),
    defaultValue: DEFAULT_BUTTON_SIZE,
    isRequired: false,
    isResponsive: false,
    description:
      "Controls the button's overall proportions - adjusting blockSize, horizontal padding, and fontSize to keep content balanced at each size.",
  },
} as ComponentMeta<ButtonOwnProps>['props']
