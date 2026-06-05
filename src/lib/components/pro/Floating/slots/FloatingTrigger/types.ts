import { HtmlTagProps } from 'lib/index.core'

export type FloatingTriggerProps = {
  children: HtmlTagProps<'span'>['children']
}

export type FloatingTriggerInternalProps = Pick<HtmlTagProps<'span'>, 'tagRef' | 'tagAttrs'>
