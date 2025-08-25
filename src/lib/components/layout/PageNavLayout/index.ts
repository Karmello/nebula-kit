import { PageNavLayout as PageNavLayoutBase } from './page-nav-layout'

import { PageNavLayoutMain } from './PageNavLayoutMain'
import { PageNavLayoutSide } from './PageNavLayoutSide'

export const PageNavLayout = Object.assign(PageNavLayoutBase, {
  Main: PageNavLayoutMain,
  Side: PageNavLayoutSide,
})

export * from './page-nav-layout'
