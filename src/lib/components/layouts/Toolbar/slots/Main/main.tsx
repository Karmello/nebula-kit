import { Flex } from 'lib/components'

import { ToolbarMainProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const Main = ({ children, elemProps, elemRef }: ToolbarMainProps) => {
  const { switchAt } = useToolbarContext()

  return (
    <Flex.Item
      elemProps={{
        ...elemProps,
        style: {
          ...elemProps?.style,
          minInlineSize: 0,
        },
      }}
      elemRef={elemRef}
      flex={1}
    >
      {children}
    </Flex.Item>
  )
}

Main.displayName = 'Toolbar.Main'
Main.slotName = 'Main'
