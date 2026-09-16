import { JSX } from 'react'

import { BoxProps } from 'lib/components/core/Box'
import { SwitchBreakpoint } from 'lib/types'

type ChildrenAsFuncArgs = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

export type ToolbarProps = {
  // own
  switchAt?: SwitchBreakpoint
  // Box
  elemAttrs?: BoxProps<'nav'>['elemAttrs']
  elemRef?: BoxProps<'nav'>['elemRef']
  children: BoxProps<'nav'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}
