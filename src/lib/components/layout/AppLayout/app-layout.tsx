import { ReactNode, isValidElement, Children } from 'react'

import { Box, Grid } from 'lib/components'
import { getDataAttrs, withPrefix } from 'lib/helpers'

import './app-layout.scss'

export type AppLayoutOwnProps = {
  children: ReactNode
  stickyHeader?: boolean
}

export const AppLayout = ({ children, stickyHeader = false }: AppLayoutOwnProps) => {
  const childrenArray = Children.toArray(children)

  const pickSlot = (slotName: string) =>
    childrenArray.find(el => isValidElement(el) && (el.type as any).appLayoutSlotName === slotName)

  const Header = pickSlot('header')
  if (!Header) {
    console.warn('[NebulaKit][AppLayout]: Component expects AppLayout.Header slot to be passed as children')
  }

  const Main = pickSlot('main')
  if (!Main) {
    console.warn('[NebulaKit][AppLayout]: Component expects AppLayout.Main slot to be passed as children')
  }

  if (!Header || !Main) {
    return null
  }

  const Footer = pickSlot('footer')

  return (
    <Grid
      rows="auto 1fr auto"
      className={withPrefix('app-layout')}
      {...getDataAttrs('app-layout', { stickyHeader })}
    >
      {Header ? (
        <Box as="header" className={withPrefix('app-layout-header')}>
          {Header}
        </Box>
      ) : null}
      {Main ? (
        <Box as="main" className={withPrefix('app-layout-main')}>
          {Main}
        </Box>
      ) : null}
      {Footer ? (
        <Box as="footer" className={withPrefix('app-layout-footer')}>
          {Footer}
        </Box>
      ) : null}
    </Grid>
  )
}
