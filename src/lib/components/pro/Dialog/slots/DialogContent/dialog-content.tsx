import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useDialogContext } from '../../DialogProvider'
import { DialogContentProps } from './definitions'

export const DialogContent = ({
  // Box
  children,
  tagAttrs,
  tagRef,
}: DialogContentProps) => {
  const { intent, padding } = useDialogContext()

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('dialog-content'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      drawable
      variant="outline"
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
