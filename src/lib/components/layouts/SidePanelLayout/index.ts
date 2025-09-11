import { SidePanelLayout as SidePanelLayoutBase } from './side-panel-layout'

import { Main } from './slots/Main'
import { MainBar } from './slots/MainBar'
import { Side } from './slots/Side'

export const SidePanelLayout = Object.assign(SidePanelLayoutBase, {
  Main,
  MainBar,
  Side,
})

export * from './side-panel-layout'
export * from './definitions'

export { useSidePanelLayout } from './SidePanelLayoutProvider'
