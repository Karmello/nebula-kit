import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useDialogContext } from '../../DialogProvider'
import { DialogHeaderProps } from './definitions'

export const DialogHeader = ({
  // HtmlTag
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
      padding={padding}
      variant="outline"
      intent={intent}
      borderTopWidth="0px"
      borderLeftWidth="0px"
      borderRightWidth="0px"
    >
      {children}
    </Box>
  )
}

DialogHeader.displayName = 'Dialog.Header'
