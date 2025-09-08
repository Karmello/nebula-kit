import { PropCategory } from 'client/definitions'
import { BUTTON_INHERITED_PROPS, ButtonOwnProps } from 'lib/components'
import { ComponentMeta, BoxIntent, ButtonSize, DEFAULT_BUTTON_SIZE } from 'lib/definitions'

const BUTTON_META: ComponentMeta<ButtonOwnProps> = {
  overview: {
    name: 'Button',
    description:
      "Button is Nebula-kit's standard action control. It adapts to different contexts by supporting visual variants, sizing, typography options, and optional icon integration, while staying consistent with the system's design language.",
    inheritedProps: BUTTON_INHERITED_PROPS,
  },
  props: [
    {
      category: PropCategory.appearance,
      name: 'size',
      options: Object.values(ButtonSize),
      defaultValue: DEFAULT_BUTTON_SIZE,
      isRequired: false,
      isResponsive: false,
      description: "Determines the button's height and scales its content accordingly.",
    },
    {
      category: PropCategory.appearance,
      name: 'textIntent',
      options: Object.values(BoxIntent),
      isRequired: false,
      isResponsive: false,
      description:
        "Adjusts the visual styling of the button's label to reflect emphasis or semantic meaning, independent of the button's container style.",
    },
  ],
}

export default BUTTON_META
