import { Box } from 'lib/index.core'

import { FloatingTriggerInternalProps, FloatingTriggerProps } from './types'

export const FloatingTrigger = ({ children, ...internalProps }: FloatingTriggerProps) => {
  const { tagRef, tagAttrs } = internalProps as FloatingTriggerInternalProps

  return (
    <Box tag="span" tagRef={tagRef} tagAttrs={tagAttrs}>
      {children}
    </Box>
  )
}

FloatingTrigger.displayName = 'Floating.Trigger'
