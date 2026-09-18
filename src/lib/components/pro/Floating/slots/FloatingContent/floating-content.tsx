import { Box } from 'lib/components/core/Box'
import { Portal } from 'lib/components/pro/Portal'

import { FloatingContentInternalProps, FloatingContentProps } from './types'

export const FloatingContent = ({ children, ...internalProps }: FloatingContentProps) => {
  const { elemRef, elemAttrs, internalOpen, setInternalOpen } =
    internalProps as FloatingContentInternalProps

  if (!internalOpen) return null

  return (
    <Portal>
      <Box
        elemTag="span"
        elemRef={elemRef}
        onKeyDown={e => {
          if (e.key === 'Esc' || e.key === 'Tab') {
            e.preventDefault()
            setInternalOpen(false)
          }
        }}
        elemAttrs={elemAttrs}
      >
        {children}
      </Box>
    </Portal>
  )
}

FloatingContent.displayName = 'Floating.Content'
