import { FlexProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const MarkerListTag = ['ul', 'ol'] as const
export type MarkerListTag = (typeof MarkerListTag)[number]

export const MarkerListStyle = ['disc', 'circle', 'square', 'decimal'] as const
export type MarkerListStyle = (typeof MarkerListStyle)[number]

export type MarkerListOwnProps = {
  listStyle?: MarkerListStyle
}

export const MARKER_LIST_INHERITED_PROPS = {
  Flex: ['children', 'tag', 'tagAttrs', 'tagRef', 'gap'] as const satisfies readonly (keyof FlexProps)[],
}

export type MarkerListInheritedProps<T extends MarkerListTag = 'ul'> = MakeRequired<
  Pick<FlexProps<T>, (typeof MARKER_LIST_INHERITED_PROPS)['Flex'][number]>,
  'children'
>

export type MarkerListProps<T extends MarkerListTag = 'ul'> = MarkerListOwnProps & MarkerListInheritedProps<T>
