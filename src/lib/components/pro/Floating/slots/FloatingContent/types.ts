import { HtmlTagProps } from 'lib/components'

export type FloatingContentProps = {
  children: HtmlTagProps<'span'>['children']
}

export type FloatingContentInternalProps = Pick<HtmlTagProps<'span'>, 'tagRef' | 'tagAttrs'> & {
  open: boolean
  isOpeningDownwards: boolean
}
