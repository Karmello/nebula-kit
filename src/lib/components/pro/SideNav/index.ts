import { SideNav as SideNavBase } from './side-nav'
import { SideNavCategory, SideNavItem } from './slots'

export const SideNav = Object.assign(SideNavBase, {
  Category: SideNavCategory,
  Item: SideNavItem,
})

export * from './definitions'
export * from './slots'
