import { JSX } from 'react'

import { HtmlTagProps } from 'lib/components'

type ChildrenAsFuncArgs = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export type ToolbarMainProps = PropsFromHtmlTag
