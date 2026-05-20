import { Text } from 'lib/components'

import { MarkupPart } from '../definitions'

export const renderPart = (part: MarkupPart, index: number) => {
  switch (part.type) {
    case 'bold':
      return <strong key={index}>{part.value}</strong>

    case 'italic':
      return <em key={index}>{part.value}</em>

    case 'code':
      return (
        <code
          key={index}
          style={{
            fontFamily: 'monospace',
          }}
        >
          {part.value}
        </code>
      )

    default:
      return part.value
  }
}
