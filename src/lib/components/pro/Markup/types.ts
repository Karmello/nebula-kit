import { BoxProps } from 'lib/components/core/Box'

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
