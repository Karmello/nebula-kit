import { ButtonProps } from 'lib/components'

type PropsFromButton = Pick<
  ButtonProps,
  | 'customSvgIcon'
  | 'disabled'
  | 'iconName'
  | 'iconPlacement'
  | 'inlineSize'
  | 'justifyContent'
  | 'tagAttrs'
  | 'tagRef'
> & {
  children: ButtonProps['children']
}

type TabsTabOwnProps = {
  value: string | number
}

export type TabsTabProps = PropsFromButton & TabsTabOwnProps
