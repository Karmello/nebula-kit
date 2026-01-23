import { ComponentMeta } from 'client/definitions'
import { Avatar, AvatarProps } from 'lib/components'

import img2 from 'client/assets/img-2.webp'

const AVATAR_EXAMPLES_META: ComponentMeta<AvatarProps>['examples'] = [
  {
    code: '<Avatar src={src} size="sm" />',
    skip: true,
  },
  {
    description: 'Defalt medium size.',
    jsx: <Avatar src={img2} />,
  },
  {
    description: 'The smallest size.',
    jsx: <Avatar src={img2} size="xs" />,
  },
  {
    description: 'The biggest size.',
    jsx: <Avatar src={img2} size="xxl" />,
  },
  {
    description: 'Displaying initials as a fallback when the image cannot be loaded.',
    jsx: <Avatar src="wrong-img-src" initials="mj" />,
  },
  {
    description: 'Square shape.',
    jsx: <Avatar src={img2} shape="square" />,
  },
]

export { AVATAR_EXAMPLES_META }
