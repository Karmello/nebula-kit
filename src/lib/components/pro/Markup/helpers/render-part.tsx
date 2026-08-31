import { Box } from 'lib/components/core/Box'

import { MarkupPart } from '../types'

export const renderPart = (part: MarkupPart, index: number) => {
  switch (part.type) {
    case 'bold':
      return <strong key={index}>{part.value}</strong>

    case 'italic':
      return <em key={index}>{part.value}</em>

    case 'token':
      return (
        <Box
          tag="span"
          key={index}
          drawable
          display="inline-block"
          bg="filled"
          intent="tertiary"
          paddingInline="4px"
        >
          {part.value}
        </Box>
      )

    default:
      return part.value
  }
}
