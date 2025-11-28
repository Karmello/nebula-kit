import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useDialogContext } from '../../DialogProvider'
import { DialogContentProps } from './definitions'

export const DialogContent = ({
  // HtmlTag
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
      minBlockSize={100}
      padding={padding}
      variant="outline"
      intent={intent}
      borderRadius={0}
      borderWidth={0}
    >
      {children}
    </Box>
  )
}

DialogContent.displayName = 'Dialog.Content'
