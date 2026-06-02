import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/index.core'
import { DialogFooterProps } from 'lib/index.pro'

import { useDialogContext } from '../../DialogProvider'

export const DialogFooter = ({
  // Box
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
      drawable
      variant="outline"
      intent={intent}
      paddingInline={padding}
      paddingBlock={`calc(${padding} / 1.25)`}
      borderBottomWidth="0px"
      borderLeftWidth="0px"
      borderRightWidth="0px"
      borderRadius="0px"
    >
      {children}
    </Box>
  )
}

DialogFooter.displayName = 'Dialog.Footer'
