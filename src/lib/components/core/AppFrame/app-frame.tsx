import { cloneElement } from 'react'

import { Box } from 'lib/components/core/Box'
import { useSlots } from 'lib/hooks'

import { type AppFrameProps } from './types'

export const AppFrame = ({ children, tagAttrs, tagRef, stickyHeader = false }: AppFrameProps) => {
  const slots = useSlots<'AppFrame.Header' | 'AppFrame.Main' | 'AppFrame.Footer'>({
    componentName: 'AppFrame',
    slotsConfig: [
      { name: 'AppFrame.Header', required: true },
      { name: 'AppFrame.Main', required: true },
      { name: 'AppFrame.Footer' },
    ],
    childrenToVerify: children,
  })

  if (!slots) return null

  const headerSlot = slots.slotsByName['AppFrame.Header'][0]
  const mainSlot = slots.slotsByName['AppFrame.Main'][0]
  const footerSlot = slots.slotsByName['AppFrame.Footer'][0]

  return (
    <Box
      display="grid"
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
    </Box>
  )
}

AppFrame.displayName = 'AppFrame'
