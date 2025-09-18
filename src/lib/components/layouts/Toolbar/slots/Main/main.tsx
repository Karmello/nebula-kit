import { Flex } from 'lib/components'

import { ToolbarMainProps } from './definitions'

export const Main = ({ children, elemProps, elemRef }: ToolbarMainProps) => {
  return (
    <Flex.Item
      elem="div"
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
