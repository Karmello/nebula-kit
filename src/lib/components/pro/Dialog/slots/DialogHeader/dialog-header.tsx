import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/index.core'
import { DialogHeaderProps } from 'lib/index.pro'

import { useDialogContext } from '../../DialogProvider'

export const DialogHeader = ({
  // Box
  children,
  tagAttrs,
  tagRef,
}: DialogHeaderProps) => {
  const { intent, padding } = useDialogContext()

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('dialog-header'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      drawable
      variant="outline"
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
