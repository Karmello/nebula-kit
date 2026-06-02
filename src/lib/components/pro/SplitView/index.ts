import { SplitViewMain, SplitViewMainBar, SplitViewSide } from './slots'
import { SplitView as SplitViewBase } from './split-view'

export const SplitView = Object.assign(SplitViewBase, {
  Main: SplitViewMain,
  MainBar: SplitViewMainBar,
  Side: SplitViewSide,
})

export * from './definitions'
export * from './slots'
