import { AppFrame as AppFrameBase } from './app-frame'

import { AppFrameHeader, AppFrameMain, AppFrameFooter } from './slots'

export const AppFrame = Object.assign(AppFrameBase, {
  Header: AppFrameHeader,
  Main: AppFrameMain,
  Footer: AppFrameFooter,
})

export { type AppFrameProps } from './definitions'
export type { AppFrameHeaderProps, AppFrameMainProps, AppFrameFooterProps } from './slots'
