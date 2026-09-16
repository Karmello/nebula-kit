import { BoxProps } from 'lib/components/core/Box'

export type MarkerListItemProps = {
  elemAttrs?: BoxProps<'li'>['elemAttrs']
  elemRef?: BoxProps<'li'>['elemRef']
  color?: BoxProps<'li'>['color']
  intent?: BoxProps<'li'>['intent']
  children: BoxProps<'li'>['children']
}
