import { PageNavLayout as PageNavLayoutBase } from './page-nav-layout'

import { PageNavLayoutMain } from './PageNavLayoutMain'
import { PageNavLayoutSideMobile } from './PageNavLayoutSideMobile'
import { PageNavLayoutSideDesktop } from './PageNavLayoutSideDesktop'

export const PageNavLayout = Object.assign(PageNavLayoutBase, {
  Main: PageNavLayoutMain,
  SideMobile: PageNavLayoutSideMobile,
  SideDesktop: PageNavLayoutSideDesktop,
})

export * from './page-nav-layout'

export { usePageNavLayout } from './PageNavLayoutProvider'
