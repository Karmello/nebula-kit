import { motion } from 'motion/react'

import { Box } from 'lib/index.core'
import { Portal } from 'lib/index.pro'

import { FloatingContentInternalProps, FloatingContentProps } from './types'

export const FloatingContent = ({ children, ...internalProps }: FloatingContentProps) => {
  const { tagRef, tagAttrs, internalOpen, setInternalOpen, isOpeningDownwards } =
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
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.18, ease: 'easeInOut' }}
          style={{ transformOrigin: isOpeningDownwards ? 'top' : 'bottom' }}
        >
          {children}
        </motion.div>
      </Box>
    </Portal>
  )
}

FloatingContent.displayName = 'Floating.Content'
