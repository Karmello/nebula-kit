import { Box } from 'lib/components/core/Box'

import { DEFAULT_FLOATING_TRIGGER_DISPLAY } from './constants'
import { FloatingTriggerInternalProps, FloatingTriggerProps } from './types'

export const FloatingTrigger = ({
  children,
  display = DEFAULT_FLOATING_TRIGGER_DISPLAY,
  cursor,
  inlineSize,
  ...internalProps
}: FloatingTriggerProps) => {
  const { tagRef, tagAttrs } = internalProps as FloatingTriggerInternalProps

  return (
    <Box
      tag="span"
      tagRef={tagRef}
      tagAttrs={tagAttrs}
      display={display}
      cursor={cursor}
      inlineSize={inlineSize}
    >
      {children}
    </Box>
  )
}

FloatingTrigger.displayName = 'Floating.Trigger'
