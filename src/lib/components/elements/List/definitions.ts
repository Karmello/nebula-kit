import { BoxProps } from 'lib/components'
import { ListElem, ListStyle, MakeRequired } from 'lib/definitions'

export type ListOwnProps = {
  listStyle?: ListStyle
}

export const LIST_INHERITED_PROPS = {
  Box: ['children', 'elem', 'elemProps', 'elemRef'] as const satisfies readonly (keyof BoxProps)[],
}

export type ListInheritedProps<E extends ListElem = 'ul'> = MakeRequired<
  Pick<BoxProps<E>, (typeof LIST_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type ListProps<E extends ListElem = 'ul'> = ListOwnProps & ListInheritedProps<E>
