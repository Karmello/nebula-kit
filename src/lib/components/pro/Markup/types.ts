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
  elemAttrs?: BoxProps['elemAttrs']
  elemRef?: BoxProps['elemRef']
  children: BoxProps['children']
}
