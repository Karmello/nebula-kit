import { ComponentMeta } from 'client/definitions'
import { WithIcon } from 'lib/components'
import { WithIconOwnProps } from 'lib/components/utility/WithIcon/definitions'

const WITH_ICON_EXAMPLES_META: ComponentMeta<WithIconOwnProps>['examples'] = [
  {
    description: 'Renders only the search icon with no accompanying content.',
    jsx: <WithIcon name="search" />,
  },
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
