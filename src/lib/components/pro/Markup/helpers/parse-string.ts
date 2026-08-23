import { MARKUP_REGEX } from '../constants'
import { MarkupPart } from '../types'

export const parseString = (value: string): MarkupPart[] => {
  const matches = value.split(MARKUP_REGEX)

  return matches.filter(Boolean).map(part => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return {
        type: 'bold',
        value: part.slice(2, -2),
      }
    }

    if (part.startsWith('_') && part.endsWith('_')) {
      return {
        type: 'italic',
        value: part.slice(1, -1),
      }
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return {
        type: 'token',
        value: part.slice(1, -1).replaceAll('\\`', '`'),
      }
    }

    return {
      type: 'text',
      value: part,
    }
  })
}
