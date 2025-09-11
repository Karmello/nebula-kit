import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const SIDE_PANEL_LAYOUT_MAIN_INHERITED_PROPS = {
  Box: [
    'children',
    'elemProps',
    'elemRef',
    'padding',
    'paddingBlock',
    'paddingInline',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
  ] as const satisfies readonly (keyof BoxProps<'section'>)[],
  Flex: [] as const,
  IconButton: [] as const,
  Spacer: [] as const,
}

export type SidePanelLayoutMainInheritedProps = MakeRequired<
  Pick<BoxProps<'section'>, (typeof SIDE_PANEL_LAYOUT_MAIN_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SidePanelLayoutMainProps = SidePanelLayoutMainInheritedProps
