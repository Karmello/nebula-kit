import { BoxProps, FlexItemProps } from 'lib/components'

export const DEFAULT_FOOTER_SECTION_FLEX: FlexItemProps['flex'] = '1'

type PropsFromFlexItem = Pick<FlexItemProps<'section'>, 'tagRef' | 'tagAttrs' | 'flex' | 'alignSelf'>

type PropsFromBox = {
  children: BoxProps<'section'>['children']
}

export type FooterSectionProps = PropsFromBox & PropsFromFlexItem
