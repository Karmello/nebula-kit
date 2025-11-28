import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useDialogContext } from '../../DialogProvider'
import { DialogFooterProps } from './definitions'

export const DialogFooter = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
}: DialogFooterProps) => {
  const { intent, padding } = useDialogContext()

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('dialog-footer'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      padding={padding}
      variant="outline"
      intent={intent}
      borderRadius={0}
      borderBottomWidth={0}
      borderLeftWidth={0}
      borderRightWidth={0}
    >
      {children}
    </Box>
  )
}

DialogFooter.displayName = 'Dialog.Footer'
