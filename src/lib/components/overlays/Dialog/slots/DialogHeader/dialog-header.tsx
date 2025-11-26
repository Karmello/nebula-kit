import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DialogHeaderProps } from './definitions'

export const DialogHeader = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
}: DialogHeaderProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('dialog-header'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      padding={10}
    >
      {children}
    </Box>
  )
}

DialogHeader.displayName = 'Dialog.Header'
