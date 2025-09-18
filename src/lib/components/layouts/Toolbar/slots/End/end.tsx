import { Flex } from 'lib/components'

import { ToolbarEndProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const End = ({ children, elemProps, elemRef }: ToolbarEndProps) => {
  const { switchAt } = useToolbarContext()

  return (
    <Flex.Item elemProps={elemProps} elemRef={elemRef}>
      {children}
    </Flex.Item>
  )
}

End.displayName = 'Toolbar.End'
End.slotName = 'End'
