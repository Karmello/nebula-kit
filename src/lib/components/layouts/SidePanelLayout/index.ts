import { SidePanelLayout as SidePanelLayoutBase } from './side-panel-layout'

import { Main } from './slots/Main'
import { Header } from './slots/Header'
import { SideMobile } from './slots/SideMobile'
import { SideDesktop } from './slots/SideDesktop'

export const SidePanelLayout = Object.assign(SidePanelLayoutBase, {
  Main,
  Header,
  SideMobile,
  SideDesktop,
})

export * from './side-panel-layout'
export * from './definitions'

export { useSidePanelLayout } from './SidePanelLayoutProvider'
