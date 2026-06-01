import { type BoxProps } from '../../Box/definitions'

type PropsFromBox = Pick<BoxProps<'li'>, 'tagAttrs' | 'tagRef' | 'color' | 'intent'> & {
  children: BoxProps<'li'>['children']
}

export type MarkerListItemProps = PropsFromBox & PropsFromBox
