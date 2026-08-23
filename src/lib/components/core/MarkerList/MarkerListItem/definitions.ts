import { BoxProps } from 'lib/index.core'

type PropsFromBox = {
  tagAttrs?: BoxProps<'li'>['tagAttrs']
  tagRef?: BoxProps<'li'>['tagRef']
  color?: BoxProps<'li'>['color']
  intent?: BoxProps<'li'>['intent']
  children: BoxProps<'li'>['children']
}

export type MarkerListItemProps = PropsFromBox
