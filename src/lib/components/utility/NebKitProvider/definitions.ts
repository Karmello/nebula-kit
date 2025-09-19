import { ReactElement } from 'react'

import { ScaleValue, Theme } from 'lib/definitions'

export type NebKitProviderProps = {
  children: ReactElement
  defaultTheme?: Theme
  defaultBorderRadius?: ScaleValue | string
}
