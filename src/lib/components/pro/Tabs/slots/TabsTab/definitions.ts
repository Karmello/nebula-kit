import { ActionGroupItemProps } from 'lib/components/pro/ActionGroup'
import { TextProps } from 'lib/index.core'

export type TabsTabProps = {
  children: TextProps<'span'>['children']
  value: string | number
  disabled?: ActionGroupItemProps['disabled']
  minInlineSize?: string
}
