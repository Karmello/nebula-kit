import { Grid } from 'lib/components'

import { ToolbarEndProps } from './definitions'

export const ToolbarEnd = ({ children, elemProps, elemRef }: ToolbarEndProps) => {
  return (
    <Grid.Item elemProps={elemProps} elemRef={elemRef} gridRow="1 / 2" gridColumn="4 / 5">
      {children}
    </Grid.Item>
  )
}

ToolbarEnd.displayName = 'Toolbar.End'
ToolbarEnd.slotName = 'End'
