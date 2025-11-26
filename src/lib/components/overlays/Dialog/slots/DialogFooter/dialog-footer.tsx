import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DialogFooterProps } from './definitions'

export const DialogFooter = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
}: DialogFooterProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('dialog-footer'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      padding={10}
    >
      {children}
    </Box>
  )
}

DialogFooter.displayName = 'Dialog.Footer'
