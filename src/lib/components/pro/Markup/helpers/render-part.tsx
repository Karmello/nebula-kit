import { Box } from 'lib/index.core'

import { MarkupPart } from '../definitions'

export const renderPart = (part: MarkupPart, index: number) => {
  switch (part.type) {
    case 'bold':
      return <strong key={index}>{part.value}</strong>

    case 'italic':
      return <em key={index}>{part.value}</em>

    case 'token':
      return (
        <Box tag="span" key={index} drawable display="inline-block" variant="solid" intent="tertiary" paddingInline="2xs">
          {part.value}
        </Box>
      )

    default:
      return part.value
  }
}
