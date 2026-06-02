import { AppFrame as AppFrameBase } from './app-frame'
import { AppFrameFooter,AppFrameHeader, AppFrameMain } from './slots'

export const AppFrame = Object.assign(AppFrameBase, {
  Header: AppFrameHeader,
  Main: AppFrameMain,
  Footer: AppFrameFooter,
})

export * from './definitions'
export * from './slots'
