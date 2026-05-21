import { BoxProps } from 'lib/components'

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

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}

export type MarkupProps = PropsFromBox
