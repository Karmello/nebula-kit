import { type BoxProps } from '../../Box/types'

type PropsFromBox = Pick<BoxProps<'li'>, 'tagAttrs' | 'tagRef' | 'color' | 'intent'> & {
  children: BoxProps<'li'>['children']
}

export type MarkerListItemProps = PropsFromBox & PropsFromBox
