import { Box } from 'lib/components/core/Box'

import { useDialogContext } from '../../providers/DialogProvider'
import { DialogHeaderProps } from './types'

export const DialogHeader = ({
  // Box
  children,
  tagAttrs,
  tagRef,
}: DialogHeaderProps) => {
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
      borderTopWidth="0px"
      borderLeftWidth="0px"
      borderRightWidth="0px"
      borderRadius="0px"
    >
      {children}
    </Box>
  )
}

DialogHeader.displayName = 'Dialog.Header'
