import { Image } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { Box } from '../../Box'

export const IMAGE_EXAMPLES: Example[] = [
  {
    jsx: <Image />,
    skip: true,
  },
  {
    description: 'Basic image rendering with a defined size.',
    jsx: (
      <Box textAlign="center">
        <Image src="/imgs/town.webp" display="inline-block" inlineSize="300px" />
      </Box>
    ),
  },
  {
    description: 'Rounded image.',
    jsx: (
      <Box textAlign="center">
        <Image
          src="/imgs/town.webp"
          display="inline-block"
          inlineSize="300px"
          borderRadius="50%"
          overflow="hidden"
        />
      </Box>
    ),
  },
  {
    description: 'Image constrained by a fixed aspect ratio.',
    jsx: (
      <Box textAlign="center">
        <Image
          src="/imgs/town.webp"
          display="inline-block"
          inlineSize="300px"
          aspectRatio="16 / 9"
          objectFit="cover"
          overflow="hidden"
        />
      </Box>
    ),
  },
]
