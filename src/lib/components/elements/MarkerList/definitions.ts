import { FlexProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const MarkerListElem = ['ul', 'ol'] as const
export type MarkerListElem = (typeof MarkerListElem)[number]

export const MarkerListStyle = ['disc', 'circle', 'square', 'decimal'] as const
export type MarkerListStyle = (typeof MarkerListStyle)[number]

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
