import { Title } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const TITLE_EXAMPLES: DocExample[] = [
  {
    description: 'Search icon aligned with the provided text content.',
    jsx: <Title iconName="search">Text content</Title>,
  },
  {
    description: 'Icon on the right.',
    jsx: (
      <Title iconName="search" iconPlacement="right">
        Text content
      </Title>
    ),
  },
]
