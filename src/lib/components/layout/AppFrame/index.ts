import { AppFrame as AppFrameBase } from './app-frame'

import { AppFrameHeader } from './AppFrameHeader'
import { AppFrameMain } from './AppFrameMain'
import { AppFrameFooter } from './AppFrameFooter'

export const AppFrame = Object.assign(AppFrameBase, {
  Header: AppFrameHeader,
  Main: AppFrameMain,
  Footer: AppFrameFooter,
})

export * from './app-frame'
