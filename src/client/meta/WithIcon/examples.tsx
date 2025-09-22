import { ComponentMeta } from 'client/definitions'
import { WithIcon } from 'lib/components'
import { WithIconProps } from 'lib/components/elements/WithIcon/definitions'

const WITH_ICON_EXAMPLES_META: ComponentMeta<WithIconProps>['examples'] = [
  {
    description: 'Renders the search icon aligned with the provided text content.',
    jsx: <WithIcon name="search">Text content</WithIcon>,
  },
  {
    description: 'Renders the search icon aligned to the right of the provided text content.',
    jsx: (
      <WithIcon name="search" position="right">
        Text content
      </WithIcon>
    ),
  },
]

export { WITH_ICON_EXAMPLES_META }
