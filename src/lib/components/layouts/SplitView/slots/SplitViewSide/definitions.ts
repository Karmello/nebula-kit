import { JSX } from 'react'

import { BoxProps, HtmlTagProps } from 'lib/components'

import { SplitViewContextProps } from '../../SplitViewProvider'

type ChildrenAsFuncArgs = {
  setSideOpen: SplitViewContextProps['setSideOpen']
  mode: SplitViewContextProps['mode']
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'aside'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'aside'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

type PropsFromBox = Pick<BoxProps<'aside'>, 'intent' | 'inlineSize'>

export type SplitViewSideProps = PropsFromHtmlTag & PropsFromBox
