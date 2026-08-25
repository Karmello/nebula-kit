import { Box } from 'lib/index.core'
import { Portal } from 'lib/index.pro'

import { FloatingContentInternalProps, FloatingContentProps } from './types'

export const FloatingContent = ({ children, ...internalProps }: FloatingContentProps) => {
  const { tagRef, tagAttrs, internalOpen, setInternalOpen } =
    internalProps as FloatingContentInternalProps

  if (!internalOpen) return null

  return (
    <Portal>
      <Box
        tag="span"
        tagRef={tagRef}
        tagAttrs={{
          ...tagAttrs,
          onKeyDown: e => {
            if (e.key === 'Esc' || e.key === 'Tab') {
              e.preventDefault()
              setInternalOpen(false)
            }
          },
        }}
      >
        {children}
      </Box>
    </Portal>
  )
}

FloatingContent.displayName = 'Floating.Content'
