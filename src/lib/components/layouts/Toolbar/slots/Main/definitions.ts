import { FlexItemProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const TOOLBAR_MAIN_INHERITED_PROPS = {
  'Flex.Item': [
    'children',
    'elemProps',
    'elemRef',
  ] as const satisfies readonly (keyof FlexItemProps<'div'>)[],
}

export type ToolbarMainInheritedProps = MakeRequired<
  Pick<FlexItemProps<'div'>, (typeof TOOLBAR_MAIN_INHERITED_PROPS)['Flex.Item'][number]>,
  'children'
>

export type ToolbarMainProps = ToolbarMainInheritedProps
