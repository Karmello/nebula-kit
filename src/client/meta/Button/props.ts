import { ComponentMeta } from 'client/definitions'
import { ButtonOwnProps, ButtonSize, DEFAULT_BUTTON_SIZE } from 'lib/components/controls/Button/definitions'

const BUTTON_PROPS_META: ComponentMeta<ButtonOwnProps>['props'] = {
  size: {
    name: 'size',
    options: Object.values(ButtonSize),
    defaultValue: DEFAULT_BUTTON_SIZE,
    isRequired: false,
    isResponsive: false,
    description:
      "Controls the button's overall proportions - adjusting blockSize, horizontal padding, and fontSize to keep content balanced at each size.",
  },
}

export { BUTTON_PROPS_META }
