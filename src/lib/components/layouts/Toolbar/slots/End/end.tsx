import { Flex } from 'lib/components'

import { ToolbarEndProps } from './definitions'

export const End = ({ children, elemProps, elemRef }: ToolbarEndProps) => {
  return (
    <Flex.Item elem="div" elemProps={elemProps} elemRef={elemRef}>
      {children}
    </Flex.Item>
  )
}

End.displayName = 'Toolbar.End'
End.slotName = 'End'
