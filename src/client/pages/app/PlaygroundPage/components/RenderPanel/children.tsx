import { AppFrame } from 'lib/components'
import { JSX } from 'react'

export const CHILDREN: Record<string, JSX.Element> = {
  AppFrame: (
    <>
      <AppFrame.Header>Header</AppFrame.Header>
      <AppFrame.Main>Main</AppFrame.Main>
      <AppFrame.Footer>Footer</AppFrame.Footer>
    </>
  ),
}
