import { JSX } from 'react'

import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const SectionTag = ['section', 'article', 'aside', 'div'] as const
export type SectionTag = (typeof SectionTag)[number]

export type SectionOwnProps = {
  heading: string | JSX.Element
  hideDivider?: boolean
}

export const SECTION_INHERITED_PROPS = {
  Box: [
    'children',
    'tag',
    'tagAttrs',
    'tagRef',
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
  ] as const satisfies readonly (keyof BoxProps<SectionTag>)[],
  Text: [] as const,
  Divider: [] as const,
  Spacer: [] as const,
}

export type SectionInheritedProps<T extends SectionTag = 'section'> = MakeRequired<
  Pick<BoxProps<T>, (typeof SECTION_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SectionProps<T extends SectionTag = 'section'> = SectionOwnProps & SectionInheritedProps<T>
