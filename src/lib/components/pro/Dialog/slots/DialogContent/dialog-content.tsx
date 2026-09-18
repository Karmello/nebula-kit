import { Box } from 'lib/components/core/Box'

import { useDialogContext } from '../../providers/DialogProvider'
import { DialogContentProps } from './types'

export const DialogContent = ({
  // Box
  children,
  elemAttrs,
  elemRef,
}: DialogContentProps) => {
  const { intent, padding } = useDialogContext()

  return (
    <Box
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      drawable
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
