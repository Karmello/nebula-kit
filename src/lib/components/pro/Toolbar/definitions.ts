import { JSX } from 'react'

import { GridProps } from 'lib/index.core'
import { SwitchBreakpoint } from 'lib/types'

type ChildrenAsFuncArgs = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

export type ToolbarOwnProps = {
  switchAt?: SwitchBreakpoint
}

type PropsFromGrid = Pick<GridProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: GridProps<'nav'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export type ToolbarProps = PropsFromGrid & ToolbarOwnProps
