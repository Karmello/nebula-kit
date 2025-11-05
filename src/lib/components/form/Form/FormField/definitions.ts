import { HtmlTagProps } from 'lib/components/base'

type PropsFromHtmlTag = Pick<HtmlTagProps<'label'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'label'>['children']
}

export type FormFieldProps = PropsFromHtmlTag
