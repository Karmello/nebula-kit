import { HtmlTag } from 'lib/components'

import { FloatingTriggerInternalProps, FloatingTriggerProps } from './types'

export const FloatingTrigger = ({ children, ...internalProps }: FloatingTriggerProps) => {
  const { tagRef, tagAttrs } = internalProps as FloatingTriggerInternalProps

  return (
    <HtmlTag tag="span" tagRef={tagRef} tagAttrs={tagAttrs}>
      {children}
    </HtmlTag>
  )
}

FloatingTrigger.displayName = 'Floating.Trigger'
