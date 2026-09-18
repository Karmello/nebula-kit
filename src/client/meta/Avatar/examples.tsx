import { Avatar } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const AVATAR_EXAMPLES: DocExample[] = [
  {
    code: '<Avatar src={src} scale="sm" />',
    isOverviewSnippet: true,
  },
  {
    description: 'Defalt medium size.',
    jsx: <Avatar src="/imgs/mj23.webp" />,
  },
  {
    description: 'The smallest size.',
    jsx: <Avatar src="/imgs/mj23.webp" scale="xs" />,
  },
  {
    description: 'The biggest size.',
    jsx: <Avatar src="/imgs/mj23.webp" scale="xl" />,
  },
  {
    description: 'Displaying initials as a fallback when the image cannot be loaded.',
    jsx: <Avatar src="wrong-img-src" initials="mj" />,
  },
  {
    description: 'Square shape.',
    jsx: <Avatar src="/imgs/mj23.webp" shape="square" />,
  },
]
