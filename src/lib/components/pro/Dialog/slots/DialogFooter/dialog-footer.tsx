import { Box } from 'lib/components/core/Box'

import { useDialogContext } from '../../providers/DialogProvider'
import { DialogFooterProps } from './types'

export const DialogFooter = ({
  // Box
  children,
  tagAttrs,
  tagRef,
}: DialogFooterProps) => {
  const { intent, padding } = useDialogContext()

  return (
    <Box
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      drawable
      // variant="outline"
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
