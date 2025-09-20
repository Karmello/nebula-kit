import classNames from 'classnames'

import { Grid } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { ToolbarMainProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const ToolbarMain = ({ children, elemProps, elemRef }: ToolbarMainProps) => {
  const { switchAt } = useToolbarContext()

  return (
    <Grid.Item
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('toolbar-main'), elemProps?.className),
        style: {
          ...elemProps?.style,
          minInlineSize: 0,
        },
      }}
      elemRef={elemRef}
      gridRow={{ base: '2 / 3', [String(switchAt)]: '1 / 2' }}
      gridColumn={{ base: '1 / -1', [String(switchAt)]: '2 / 3' }}
    >
      {children}
    </Grid.Item>
  )
}

ToolbarMain.displayName = 'Toolbar.Main'
ToolbarMain.slotName = 'Main'
