import { ReactElement } from 'react'

import { ScaleValue, Theme } from 'lib/definitions'

export type NebkitProviderProps = {
  children: ReactElement
  defaultTheme?: Theme
  defaultBorderRadius?: ScaleValue | string
}
