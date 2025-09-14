import { FlexProps } from 'lib/components'
import { MarkerListElem, MarkerListStyle, MakeRequired } from 'lib/definitions'

export type MarkerListOwnProps = {
  listStyle?: MarkerListStyle
}

export const MARKER_LIST_INHERITED_PROPS = {
  Flex: ['children', 'elem', 'elemProps', 'elemRef', 'gap'] as const satisfies readonly (keyof FlexProps)[],
}

export type MarkerListInheritedProps<E extends MarkerListElem = 'ul'> = MakeRequired<
  Pick<FlexProps<E>, (typeof MARKER_LIST_INHERITED_PROPS)['Flex'][number]>,
  'children'
>

export type MarkerListProps<E extends MarkerListElem = 'ul'> = MarkerListOwnProps &
  MarkerListInheritedProps<E>
