import { HtmlTagProps } from 'lib/components'

export type FloatingTriggerProps = {
  children: HtmlTagProps<'span'>['children']
}

export type FloatingTriggerInternalProps = Pick<HtmlTagProps<'span'>, 'tagRef' | 'tagAttrs'>
