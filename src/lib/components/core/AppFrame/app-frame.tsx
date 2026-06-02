import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { AppFrameProps, Grid } from 'lib/index.core'

import { AppFrameProvider } from './AppFrameProvider'

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
        {({ slotsByName }) => (
          <Grid
            tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('app-frame'), tagAttrs?.className) }}
            tagRef={tagRef}
            gridTemplateRows="auto 1fr auto"
          >
            {slotsByName['AppFrame.Header']}
            {slotsByName['AppFrame.Main']}
            {slotsByName['AppFrame.Footer']}
          </Grid>
        )}
      </WithSlots>
    </AppFrameProvider>
  )
}

AppFrame.displayName = 'AppFrame'
