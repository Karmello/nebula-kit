import { SplitView as SplitViewBase } from './split-view'

import { Main } from './slots/Main'
import { MainBar } from './slots/MainBar'
import { Side } from './slots/Side'

export const SplitView = Object.assign(SplitViewBase, {
  Main,
  MainBar,
  Side,
})

export * from './split-view'
export * from './definitions'
