import { Box } from 'lib/components'

import { ImageProps } from './definitions'

export const Image = (props: ImageProps) => {
  return <Box tag="img" />
}

Image.displayName = 'Image'
