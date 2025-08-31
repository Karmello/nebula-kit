import {
  BUTTON_DEFAULT_INTENT,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
  ButtonOwnProps,
  WITH_ICON_DEFAULT_ICON_POSITION,
} from 'lib/components'

import {
  ComponentPropsMeta,
  BoxVariant,
  BoxIntent,
  ButtonSize,
  DEFAULT_BORDER_RADIUS,
  IconPosition,
} from 'lib/definitions'

import { ICON_NAMES } from 'lib/icons'

enum PropCategory {
  appearance = 'Appearance',
  state = 'State',
  adornments = 'Adornments',
}

const BUTTON_PROPS_META: ComponentPropsMeta<ButtonOwnProps> = [
  {
    category: PropCategory.appearance,
    name: 'variant',
    options: Object.values(BoxVariant),
    defaultValue: BUTTON_DEFAULT_VARIANT,
    isRequired: false,
    isResponsive: false,
    description: 'Controls the overall visual style of the button’s container.',
  },
  {
    category: PropCategory.appearance,
    name: 'intent',
    options: Object.values(BoxIntent),
    defaultValue: BUTTON_DEFAULT_INTENT,
    isRequired: false,
    isResponsive: false,
    description:
      'Communicates the purpose of the button through its visual styling, indicating how the action should be interpreted.',
  },
  {
    category: PropCategory.appearance,
    name: 'textIntent',
    options: Object.values(BoxIntent),
    defaultValue: '',
    isRequired: false,
    isResponsive: false,
    description:
      "Adjusts the visual styling of the button's label to reflect emphasis or semantic meaning, independent of the button's container style.",
  },
  {
    category: PropCategory.appearance,
    name: 'size',
    options: Object.values(ButtonSize),
    defaultValue: BUTTON_DEFAULT_SIZE,
    isRequired: false,
    isResponsive: false,
    description: "Determines the button's height and scales its content accordingly.",
  },
  {
    category: PropCategory.appearance,
    name: 'borderRadius',
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_BORDER_RADIUS),
    isRequired: false,
    isResponsive: false,
    description: "Defines the roundness of the button's corners, shaping its overall silhouette.",
  },
  {
    category: PropCategory.state,
    name: 'disabled',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: "Prevents user interaction and signals that the button's action is unavailable.",
  },
  {
    category: PropCategory.adornments,
    name: 'iconName',
    options: Object.values(ICON_NAMES),
    defaultValue: '',
    isRequired: false,
    isResponsive: false,
    description: 'Specifies which icon is rendered inside the button.',
  },
  {
    category: PropCategory.adornments,
    name: 'iconPosition',
    options: Object.values(IconPosition),
    defaultValue: WITH_ICON_DEFAULT_ICON_POSITION,
    isRequired: false,
    isResponsive: false,
    description: "Defines where the icon is placed in relation to the button's label.",
  },
]

export default BUTTON_PROPS_META
