import { Toolbar as ToolbarBase } from './toolbar'

import { ToolbarStart, ToolbarMain, ToolbarEnd } from './slots'

export const Toolbar = Object.assign(ToolbarBase, {
  Start: ToolbarStart,
  Main: ToolbarMain,
  End: ToolbarEnd,
})

export { type ToolbarProps } from './definitions'
export type { ToolbarStartProps, ToolbarMainProps, ToolbarEndProps } from './slots'
