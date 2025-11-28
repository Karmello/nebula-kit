import { SplitView as SplitViewBase } from './split-view'

import { SplitViewMain, SplitViewMainBar, SplitViewSide } from './slots'

export const SplitView = Object.assign(SplitViewBase, {
  Main: SplitViewMain,
  MainBar: SplitViewMainBar,
  Side: SplitViewSide,
})

export { type SplitViewProps } from './definitions'
export type { SplitViewMainProps, SplitViewMainBarProps, SplitViewSideProps } from './slots'
