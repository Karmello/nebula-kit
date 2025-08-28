import { SidePanelLayout as SidePanelLayoutBase } from './side-panel-layout'

import { SidePanelLayoutMain } from './SidePanelLayoutMain'
import { SidePanelLayoutMobile } from './SidePanelLayoutMobile'
import { SidePanelLayoutDesktop } from './SidePanelLayoutDesktop'

export const SidePanelLayout = Object.assign(SidePanelLayoutBase, {
  Main: SidePanelLayoutMain,
  SideMobile: SidePanelLayoutMobile,
  SideDesktop: SidePanelLayoutDesktop,
})

export * from './side-panel-layout'

export { useSidePanelLayout } from './SidePanelLayoutProvider'
