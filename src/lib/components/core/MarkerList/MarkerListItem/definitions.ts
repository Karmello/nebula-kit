import { BoxProps } from 'lib/components'

type PropsFromBox = Pick<BoxProps<'li'>, 'tagAttrs' | 'tagRef' | 'color' | 'intent'> & {
  children: BoxProps<'li'>['children']
}

export type MarkerListItemProps = PropsFromBox & PropsFromBox
