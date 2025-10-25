import { BoxProps } from 'lib/components/base'

type SelectOwnProps = {
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

type PropsFromBox = Pick<BoxProps, 'variant' | 'intent'>

export type SelectProps = PropsFromBox & SelectOwnProps
