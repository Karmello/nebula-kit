import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const SPLIT_VIEW_SIDE_INHERITED_PROPS = {
  Box: [
    'children',
    'tagAttrs',
    'tagRef',
    'intent',
    'inlineSize',
  ] as const satisfies readonly (keyof BoxProps<'aside'>)[],
  Flex: [] as const,
  IconButton: [] as const,
}

export type SplitViewSideInheritedProps = MakeRequired<
  Pick<BoxProps<'aside'>, (typeof SPLIT_VIEW_SIDE_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SplitViewSideProps = SplitViewSideInheritedProps
