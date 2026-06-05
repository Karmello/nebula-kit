import { FloatingPortal } from '@floating-ui/react'
import { motion } from 'motion/react'

import { HtmlTag } from 'lib/components'

import { FloatingContentInternalProps, FloatingContentProps } from './types'

export const FloatingContent = ({ children, ...internalProps }: FloatingContentProps) => {
  const { tagRef, tagAttrs, open, isOpeningDownwards } = internalProps as FloatingContentInternalProps

  if (!open) return null

  return (
    <FloatingPortal>
      <HtmlTag tag="span" tagRef={tagRef} tagAttrs={tagAttrs}>
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.18, ease: 'easeInOut' }}
          style={{ transformOrigin: isOpeningDownwards ? 'top' : 'bottom' }}
        >
          {children}
        </motion.div>
      </HtmlTag>
    </FloatingPortal>
  )
}

FloatingContent.displayName = 'Floating.Content'
