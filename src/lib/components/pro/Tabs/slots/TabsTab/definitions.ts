import { ButtonProps } from 'lib/index.core'

type PropsFromButton = Pick<
  ButtonProps,
  'customSvgIcon' | 'disabled' | 'iconName' | 'iconPlacement' | 'inlineSize' | 'align' | 'tagAttrs' | 'tagRef'
> & {
  children: ButtonProps['children']
}

type TabsTabOwnProps = {
  value: string | number
}

export type TabsTabProps = PropsFromButton & TabsTabOwnProps
