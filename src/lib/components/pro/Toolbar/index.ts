import { ToolbarEnd,ToolbarMain, ToolbarStart } from './slots'
import { Toolbar as ToolbarBase } from './toolbar'

export const Toolbar = Object.assign(ToolbarBase, {
  Start: ToolbarStart,
  Main: ToolbarMain,
  End: ToolbarEnd,
})

export * from './definitions'
export * from './slots'
