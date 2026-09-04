import { Box } from 'lib/components/core/Box'

import { useDialogContext } from '../../providers/DialogProvider'
import { DialogContentProps } from './types'

export const DialogContent = ({
  // Box
  children,
  tagAttrs,
  tagRef,
}: DialogContentProps) => {
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
      borderWidth="0px"
      borderRadius="0px"
    >
      {children}
    </Box>
  )
}

DialogContent.displayName = 'Dialog.Content'
