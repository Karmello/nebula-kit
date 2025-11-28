import { SideNav as SideNavBase } from './side-nav'

import { SideNavCategory, SideNavItem } from './slots'

export const SideNav = Object.assign(SideNavBase, {
  Category: SideNavCategory,
  Item: SideNavItem,
})

export { type SideNavProps } from './definitions'
export type { SideNavCategoryProps, SideNavItemProps } from './slots'
