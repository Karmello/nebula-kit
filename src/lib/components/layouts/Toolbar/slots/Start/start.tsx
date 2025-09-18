import { Flex } from 'lib/components'

import { ToolbarStartProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const Start = ({ children, elemProps, elemRef }: ToolbarStartProps) => {
  const { switchAt } = useToolbarContext()

  return (
    <Flex.Item elemProps={elemProps} elemRef={elemRef}>
      {children}
    </Flex.Item>
  )
}

Start.displayName = 'Toolbar.Start'
Start.slotName = 'Start'
