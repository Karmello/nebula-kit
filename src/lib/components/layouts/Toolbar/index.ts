import { Toolbar as ToolbarBase } from './toolbar'

import { Start } from './slots/Start'
import { Main } from './slots/Main'
import { End } from './slots/End'

export const Toolbar = Object.assign(ToolbarBase, {
  Start,
  Main,
  End,
})

export * from './toolbar'
export * from './definitions'
