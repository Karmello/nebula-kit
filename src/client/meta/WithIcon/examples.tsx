import { ComponentMeta } from 'client/definitions'
import { WithIcon } from 'lib/components'
import { WithIconOwnProps } from 'lib/components/utility/WithIcon/definitions'

export default [
  {
    description: 'Renders only the search icon with no accompanying content.',
    jsx: <WithIcon iconName="search" />,
  },
  {
    description: 'Renders the search icon aligned with the provided text content.',
    jsx: <WithIcon iconName="search">Text content</WithIcon>,
  },
  {
    description: 'Renders the search icon aligned to the right of the provided text content.',
    jsx: (
      <WithIcon iconName="search" iconPosition="right">
        Text content
      </WithIcon>
    ),
  },
] as ComponentMeta<WithIconOwnProps>['examples']
