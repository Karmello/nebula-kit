import { JSX } from 'react'

import { BoxProps } from 'lib/index.core'
import { SwitchBreakpoint } from 'lib/types'

type ChildrenAsFuncArgs = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

export type ToolbarOwnProps = {
  switchAt?: SwitchBreakpoint
}

type PropsFromBox = Pick<BoxProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'nav'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export type ToolbarProps = PropsFromBox & ToolbarOwnProps
