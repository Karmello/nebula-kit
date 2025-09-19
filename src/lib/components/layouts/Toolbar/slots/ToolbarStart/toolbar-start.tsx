import { Grid } from 'lib/components'

import { ToolbarStartProps } from './definitions'

export const ToolbarStart = ({ children, elemProps, elemRef }: ToolbarStartProps) => {
  return (
    <Grid.Item elemProps={elemProps} elemRef={elemRef} gridRow="1 / 2" gridColumn="1 / 2">
      {children}
    </Grid.Item>
  )
}

ToolbarStart.displayName = 'Toolbar.Start'
ToolbarStart.slotName = 'Start'
