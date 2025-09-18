import { Grid } from 'lib/components'

import { ToolbarEndProps } from './definitions'

export const End = ({ children, elemProps, elemRef }: ToolbarEndProps) => {
  return (
    <Grid.Item elemProps={elemProps} elemRef={elemRef} gridRow="1 / 2" gridColumn="3 / 4">
      {children}
    </Grid.Item>
  )
}

End.displayName = 'Toolbar.End'
End.slotName = 'End'
