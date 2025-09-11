import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const SIDE_PANEL_LAYOUT_SIDE_INHERITED_PROPS = {
  Box: [
    'children',
    'elemProps',
    'elemRef',
    'intent',
    'inlineSize',
  ] as const satisfies readonly (keyof BoxProps<'aside'>)[],
  HAlign: [] as const,
  IconButton: [] as const,
}

export type SidePanelLayoutSideInheritedProps = MakeRequired<
  Pick<BoxProps<'aside'>, (typeof SIDE_PANEL_LAYOUT_SIDE_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SidePanelLayoutSideProps = SidePanelLayoutSideInheritedProps
