import { Grid } from 'lib/components'

import { ToolbarStartProps } from './definitions'

export const ToolbarStart = ({ children, tagAttrs, tagRef }: ToolbarStartProps) => {
  return (
    <Grid.Item tagAttrs={tagAttrs} tagRef={tagRef} gridRow="1 / 2" gridColumn="2 / 3" alignSelf="center">
      {children}
    </Grid.Item>
  )
}

ToolbarStart.displayName = 'Toolbar.Start'
ToolbarStart.slotName = 'Start'
