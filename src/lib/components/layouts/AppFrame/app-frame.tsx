import { WithSlots } from 'lib/components/internal'
import { Grid } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameProvider } from './AppFrameProvider'
import { AppFrameProps } from './definitions'

import './app-frame.scss'

export const AppFrame = ({ children, stickyHeader = false }: AppFrameProps) => {
  return (
    <AppFrameProvider stickyHeader={stickyHeader}>
      <WithSlots
        componentName="AppFrame"
        header="required"
        main="required"
        footer="optional"
        childrenToVerify={children}
      >
        {slots => (
          <Grid elemProps={{ className: withPrefix('app-frame') }}>
            {slots.Header || <div />}
            {slots.Main || <div />}
            {slots.Footer}
          </Grid>
        )}
      </WithSlots>
    </AppFrameProvider>
  )
}
