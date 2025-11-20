import { useLayoutEffect, useRef, useState } from 'react'

import { Box, Button, Callout, Slide } from 'lib/components'
import { SlideDirection } from 'lib/components/motion/Slide/definitions'

import { SNACKBAR_MARGIN } from './definitions'
import { CALLOUT_CONFIG, CalloutStatus } from '../Callout/definitions'

export type SnackbarItemProps = {
  direction: SlideDirection
  left?: boolean
  right?: boolean
  visible: boolean
  status?: CalloutStatus
  content?: string
  heading?: string
  handleClose: () => void
}

export const SnackbarRegion = ({
  direction,
  left,
  right,
  visible,
  status,
  content,
  heading,
  handleClose,
}: SnackbarItemProps) => {
  const [offset, setOffset] = useState<number>(9999)
  const calloutRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (calloutRef.current) {
      const rect = calloutRef.current.getBoundingClientRect()
      setOffset(rect.height + SNACKBAR_MARGIN * 2)
    }
  }, [calloutRef.current, visible])

  return (
    <Box
      tagAttrs={{ style: { pointerEvents: !visible ? 'none' : undefined } }}
      position="fixed"
      top={direction === 'top' ? 0 : undefined}
      bottom={direction === 'bottom' ? 0 : undefined}
      left={left ? 0 : undefined}
      right={right ? 0 : undefined}
      margin={SNACKBAR_MARGIN}
      zIndex={30}
    >
      <Slide direction={direction} offset={`${offset}px`} visible={visible}>
        <Box position="relative">
          <Box position="absolute" top={5} right={5}>
            <Button
              tagAttrs={{ onClick: handleClose }}
              iconName="close"
              size="xs"
              variant="solid"
              intent="primary"
              color={visible ? CALLOUT_CONFIG[status || 'info'].color : undefined}
            />
          </Box>
          <Callout
            key={status}
            tagRef={calloutRef}
            size="sm"
            content={content || ''}
            heading={heading}
            status={status}
          />
        </Box>
      </Slide>
    </Box>
  )
}
