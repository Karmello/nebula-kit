import { AppFrame as AppFrameBase } from './app-frame'

import { Header } from './slots/Header'
import { Main } from './slots/Main'
import { Footer } from './slots/Footer'

export const AppFrame = Object.assign(AppFrameBase, {
  Header,
  Main,
  Footer,
})

export * from './app-frame'
