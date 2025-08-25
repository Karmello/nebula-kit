import { ReactNode, isValidElement, Children } from 'react'

import { Box, Grid } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type PageNavLayoutOwnProps = {
  children: ReactNode
}

export const PageNavLayout = ({ children }: PageNavLayoutOwnProps) => {
  const childrenArray = Children.toArray(children)

  const pickSlot = (slotName: string) =>
    childrenArray.find(el => isValidElement(el) && (el.type as any).pageNavLayoutSlotName === slotName)

  const Main = pickSlot('main')
  if (!Main) {
    console.warn(
      '[NebulaKit][PageNavLayout]: Component expects PageNavLayout.Main slot to be passed as children'
    )
  }

  const Side = pickSlot('side')
  if (!Side) {
    console.warn(
      '[NebulaKit][PageNavLayout]: Component expects PageNavLayout.Side slot to be passed as children'
    )
  }

  if (!Main || !Side) {
    return null
  }

  return (
    <Grid
      className={withPrefix('page-nav-layout')}
      rows={{ md: 'auto 1fr' }}
      columns={{ md: '200px minmax(0, 1fr)' }}
      minBlockSize="100dvh"
    >
      <div>side header</div>
      <div>main header</div>
      {Side ? (
        <Box
          as="aside"
          aria-label="Section navigation"
          className={withPrefix('page-nav-layout-side-desktop')}
          display={{
            base: 'none',
            md: 'block',
          }}
        >
          {Side}
        </Box>
      ) : null}
      {Side ? (
        <Box
          as="aside"
          aria-label="Section navigation"
          className={withPrefix('page-nav-layout-side-mobile')}
          intent="tertiary"
          display={{ md: 'none' }}
          position="fixed"
          top={0}
          left={0}
          inlineSize="min(85vw, 320px)"
          minBlockSize="100dvh"
          style={{ zIndex: 20, overflow: 'auto' }}
        >
          {Side}
        </Box>
      ) : null}
      {Main ? (
        <Box as="section" className={withPrefix('page-nav-layout-main')} minBlockSize={0}>
          {Main}
        </Box>
      ) : null}
    </Grid>
  )
}
