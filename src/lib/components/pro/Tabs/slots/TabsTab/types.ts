import { TextProps } from 'lib/index.core'

export type TabsTabProps = {
  children: TextProps<'span'>['children']
  value: string | number
  disabled?: boolean
  minInlineSize?: string
}
