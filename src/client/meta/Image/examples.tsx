import { ComponentMeta } from 'client/definitions'
import { Box, Image, ImageProps } from 'lib/components'

import img1 from 'client/assets/img-1.webp'

const IMAGE_EXAMPLES_META: ComponentMeta<ImageProps>['examples'] = [
  {
    jsx: <Image />,
    skip: true,
  },
  {
    description: 'Basic image rendering with a defined size.',
    jsx: (
      <Box textAlign="center">
        <Image src={img1} display="inline-block" inlineSize="300px" />
      </Box>
    ),
  },
  {
    description: 'Rounded image.',
    jsx: (
      <Box textAlign="center">
        <Image src={img1} display="inline-block" inlineSize="300px" borderRadius="50%" overflow="hidden" />
      </Box>
    ),
  },
  {
    description: 'Image constrained by a fixed aspect ratio.',
    jsx: (
      <Box textAlign="center">
        <Image src={img1} display="inline-block" inlineSize="300px" aspectRatio="16 / 9" objectFit="cover" overflow="hidden" />
      </Box>
    ),
  },
]

export { IMAGE_EXAMPLES_META }
