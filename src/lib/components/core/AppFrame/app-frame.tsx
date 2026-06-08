import { cloneElement } from 'react'

import { AppFrameProps, Grid } from 'lib/components'
import { WithSlots } from 'lib/components/shared'

export const AppFrame = ({ children, tagAttrs, tagRef, stickyHeader = false }: AppFrameProps) => {
  return (
    <WithSlots<'AppFrame.Header' | 'AppFrame.Main' | 'AppFrame.Footer'>
      componentName="AppFrame"
      slotsConfig={[
        { name: 'AppFrame.Header', required: true },
        { name: 'AppFrame.Main', required: true },
        { name: 'AppFrame.Footer' },
      ]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        const headerSlot = slotsByName['AppFrame.Header'][0]
        const mainSlot = slotsByName['AppFrame.Main'][0]
        const footerSlot = slotsByName['AppFrame.Footer'][0]

        return (
          <Grid tagRef={tagRef} tagAttrs={tagAttrs} gridTemplateRows="auto 1fr auto" minInlineSize="100%" minBlockSize="100dvh">
            {cloneElement(headerSlot as any, { stickyHeader })}
            {mainSlot}
            {footerSlot}
          </Grid>
        )
      }}
    </WithSlots>
  )
}

AppFrame.displayName = 'AppFrame'
