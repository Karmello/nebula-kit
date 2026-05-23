import { BoxProps } from 'lib/components'

type PropsFromBox = Pick<BoxProps, 'inlineSize' | 'disabled'> & {
  children: BoxProps<'div'>['children']
}

export type DropdownListTriggerProps = PropsFromBox
