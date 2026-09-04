import { TextProps } from 'lib/components/core/Text'

export type TabsTabProps = {
  children: TextProps<'span'>['children']
  value: string | number
  disabled?: boolean
  minInlineSize?: string
}
