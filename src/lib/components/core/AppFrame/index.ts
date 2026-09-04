import { AppFrame as AppFrameBase } from './app-frame'
import { AppFrameFooter, AppFrameFooterSection, AppFrameHeader, AppFrameMain } from './slots'

export const AppFrame = Object.assign(AppFrameBase, {
  Header: AppFrameHeader,
  Main: AppFrameMain,
  Footer: AppFrameFooter,
  FooterSection: AppFrameFooterSection,
})

export * from './slots'
export * from './types'
