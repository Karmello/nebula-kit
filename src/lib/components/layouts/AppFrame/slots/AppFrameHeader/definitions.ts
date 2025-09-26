import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'header'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'header'>['children']
}

type PropsFromBox = Pick<BoxProps<'header'>, 'intent' | 'minBlockSize'>

export type AppFrameHeaderProps = PropsFromHtmlTag & PropsFromBox
