import { JSX } from 'react'

import { BoxProps } from 'lib/components'
import { MakeRequired, SectionElem } from 'lib/definitions'

export type SectionOwnProps = {
  heading: string | JSX.Element
  hideDivider?: boolean
}

export const SECTION_INHERITED_PROPS = {
  Box: [
    'children',
    'elem',
    'elemProps',
    'elemRef',
    'variant',
    'intent',
    'borderRadius',
    'padding',
    'paddingBlock',
    'paddingInline',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
  ] as const satisfies readonly (keyof BoxProps<SectionElem>)[],
  Text: [] as const,
  Divider: [] as const,
  Spacer: [] as const,
}

export type SectionInheritedProps<E extends SectionElem = 'section'> = MakeRequired<
  Pick<BoxProps<E>, (typeof SECTION_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SectionProps<E extends SectionElem = 'section'> = SectionOwnProps & SectionInheritedProps<E>
