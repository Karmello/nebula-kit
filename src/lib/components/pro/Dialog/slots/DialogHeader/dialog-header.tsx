import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useDialogContext } from '../../DialogProvider'
import { DialogHeaderProps } from './definitions'

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
