import classNames from 'classnames'

import { WithSlots } from 'lib/components/internal'
import { Grid } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameProvider } from './AppFrameProvider'
import { AppFrameProps } from './definitions'

import './app-frame.scss'

export const AppFrame = ({ children, tagAttrs, tagRef, stickyHeader = false }: AppFrameProps) => {
  return (
    <AppFrameProvider stickyHeader={stickyHeader}>
      <WithSlots<'AppFrame.Header' | 'AppFrame.Main' | 'AppFrame.Footer'>
        componentName="AppFrame"
        slotsConfig={[
          { name: 'AppFrame.Header', required: true },
          { name: 'AppFrame.Main', required: true },
          { name: 'AppFrame.Footer' },
        ]}
        childrenToVerify={children}
      >
        {({ slots }) => (
          <Grid
            tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('app-frame'), tagAttrs?.className) }}
            tagRef={tagRef}
          >
            {slots['AppFrame.Header'] || <div />}
            {slots['AppFrame.Main'] || <div />}
            {slots['AppFrame.Footer']}
          </Grid>
        )}
      </WithSlots>
    </AppFrameProvider>
  )
}

AppFrame.displayName = 'AppFrame'
