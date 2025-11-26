import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DialogContentProps } from './definitions'

export const DialogContent = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
}: DialogContentProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('dialog-content'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      minBlockSize={100}
      padding={10}
    >
      {children}
    </Box>
  )
}

DialogContent.displayName = 'Dialog.Content'
