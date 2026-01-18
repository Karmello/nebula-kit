import { ComponentMeta } from 'client/definitions'
import { Image, ImageProps } from 'lib/components'

import img1 from 'client/assets/img-1.webp'

const IMAGE_EXAMPLES_META: ComponentMeta<ImageProps>['examples'] = [
  {
    jsx: <Image />,
    skip: true,
  },
  {
    description: 'Basic image rendering with a defined size.',
    jsx: <Image src={img1} inlineSize="300px" />,
  },
  {
    description: 'Rounded image.',
    jsx: <Image src={img1} inlineSize="300px" borderRadius="50%" overflow="hidden" />,
  },
  {
    description: 'Image constrained by a fixed aspect ratio.',
    jsx: <Image src={img1} inlineSize="300px" aspectRatio="16 / 9" objectFit="cover" overflow="hidden" />,
  },
]

export { IMAGE_EXAMPLES_META }
