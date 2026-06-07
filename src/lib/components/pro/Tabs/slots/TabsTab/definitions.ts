import { ActionGroupItemProps } from 'lib/components/pro/ActionGroup'
import { FlexProps, TextProps } from 'lib/index.core'

export type TabsTabProps = {
  children: TextProps<'span'>['children']
  value: string | number
  disabled?: ActionGroupItemProps['disabled']
  minInlineSize?: FlexProps['minInlineSize']
}
