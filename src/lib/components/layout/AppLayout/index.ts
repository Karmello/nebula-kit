import { AppLayout as AppLayoutBase } from './app-layout'

import { AppLayoutHeader } from './AppLayoutHeader'
import { AppLayoutMain } from './AppLayoutMain'
import { AppLayoutFooter } from './AppLayoutFooter'

export const AppLayout = Object.assign(AppLayoutBase, {
  Header: AppLayoutHeader,
  Main: AppLayoutMain,
  Footer: AppLayoutFooter,
})

export * from './app-layout'
