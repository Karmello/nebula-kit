import { ElementType } from 'react'

import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'
import { RespValue } from 'lib/definitions'

export const SEGMENT_DIRECTIONS = ['row', 'column'] as const

export type SegmentDirection = (typeof SEGMENT_DIRECTIONS)[number]

type SegmentOwnProps = {
  direction?: RespValue<SegmentDirection>
  stretch?: RespValue<boolean>
}

type PropsFromHtmlTag<T extends ElementType = 'div'> = Pick<
  HtmlTagProps<T>,
  'tag' | 'tagAttrs' | 'tagRef'
> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox = Pick<BoxProps, 'variant' | 'color' | 'intent'>

type PropsFromButton = Pick<ButtonProps, 'size'>

export type SegmentProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T> &
  PropsFromBox &
  PropsFromButton &
  SegmentOwnProps
