import { BoxProps } from 'lib/index.core'

export type MarkerListItemProps = {
  tagAttrs?: BoxProps<'li'>['tagAttrs']
  tagRef?: BoxProps<'li'>['tagRef']
  color?: BoxProps<'li'>['color']
  intent?: BoxProps<'li'>['intent']
  children: BoxProps<'li'>['children']
}
