import classNames from 'classnames'

import { WithSlots } from 'lib/components/internal'
import { Grid } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameProvider } from './AppFrameProvider'
import { AppFrameProps } from './definitions'

import './app-frame.scss'

export const AppFrame = ({ children, elemProps, elemRef, stickyHeader = false }: AppFrameProps) => {
  return (
    <AppFrameProvider stickyHeader={stickyHeader}>
      <WithSlots<'Header' | 'Main' | 'Footer'>
        componentName="AppFrame"
        slotsConfig={[
          { name: 'Header', required: true },
          { name: 'Main', required: true },
          { name: 'Footer' },
        ]}
        childrenToVerify={children}
      >
        {slots => (
          <Grid
            elemProps={{ ...elemProps, className: classNames(withPrefix('app-frame'), elemProps?.className) }}
            elemRef={elemRef}
          >
            {slots.Header || <div />}
            {slots.Main || <div />}
            {slots.Footer}
          </Grid>
        )}
      </WithSlots>
    </AppFrameProvider>
  )
}

AppFrame.displayName = 'AppFrame'
