import { HtmlTagProps } from 'lib/components/base'
import { FlexProps } from 'lib/components/layout'

export const DEFAULT_FORM_FLEX_DIRECTION: FormProps['flexDirection'] = 'column'
export const DEFAULT_FORM_ALIGN_ITEMS: FormProps['alignItems'] = 'stretch'
export const DEFAULT_FORM_GAP: FormProps['gap'] = 10

type PropsFromHtmlTag = Pick<HtmlTagProps<'form'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'form'>['children']
}

type PropsFromFlex = Pick<
  FlexProps<'form'>,
  'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'gap'
>

export type FormProps = PropsFromHtmlTag & PropsFromFlex
