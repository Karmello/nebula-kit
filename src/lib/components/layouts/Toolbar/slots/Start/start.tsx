import { Flex } from 'lib/components'

import { ToolbarStartProps } from './definitions'

export const Start = ({ children, elemProps, elemRef }: ToolbarStartProps) => {
  return (
    <Flex.Item elem="div" elemProps={elemProps} elemRef={elemRef}>
      {children}
    </Flex.Item>
  )
}

Start.displayName = 'Toolbar.Start'
Start.slotName = 'Start'
