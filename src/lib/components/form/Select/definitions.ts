import { BoxProps, ButtonProps } from 'lib/components'

type SelectOwnProps = {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

type PropsFromBox = Pick<BoxProps, 'inlineSize'>

type PropsFromButton = Pick<ButtonProps, 'variant' | 'intent' | 'size'>

export type SelectProps = PropsFromBox & PropsFromButton & SelectOwnProps
