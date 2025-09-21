import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const MARKER_LIST_ITEM_INHERITED_PROPS = {
  Box: ['children', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof BoxProps)[],
}

export type MarkerListItemInheritedProps = MakeRequired<
  Pick<BoxProps<'li'>, (typeof MARKER_LIST_ITEM_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type MarkerListItemProps = MarkerListItemInheritedProps
