import { BoxProps } from 'lib/index.core'

export const MARKUP_REGEX = /(\*\*.*?\*\*|_.*?_|`(?:\\`|[^`])*`)/g

export type MarkupPart =
  | {
      type: 'text'
      value: string
    }
  | {
      type: 'bold'
      value: string
    }
  | {
      type: 'italic'
      value: string
    }
  | {
      type: 'token'
      value: string
    }

export type MarkupProps = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps['children']
}
