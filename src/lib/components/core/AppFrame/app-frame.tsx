import { cloneElement } from 'react'

import { WithSlots } from 'lib/components/shared'
import { Grid } from 'lib/index.core'

import { type AppFrameProps } from './definitions'

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
          <Grid
            tagRef={tagRef}
            tagAttrs={{
              ...tagAttrs,
              style: {
                ...tagAttrs?.style,
                minInlineSize: '100%',
                minBlockSize: '100dvh',
              },
            }}
            gridTemplateRows="auto 1fr auto"
          >
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
