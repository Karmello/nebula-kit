import classNames from 'classnames'

import { WithSlots } from 'lib/components/internal'
import { Grid } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { DEFAULT_SWITCH_AT } from 'lib/definitions'

import { ToolbarProvider } from './ToolbarProvider'
import { ToolbarProps } from './definitions'

export const Toolbar = ({ children, elemProps, elemRef, switchAt = DEFAULT_SWITCH_AT }: ToolbarProps) => {
  return (
    <ToolbarProvider switchAt={switchAt}>
      <WithSlots<'Start' | 'Main' | 'End'>
        componentName="Toolbar"
        slotsConfig={[{ name: 'Start', required: true }, { name: 'Main' }, { name: 'End' }]}
        childrenToVerify={children}
      >
        {slots => (
          <Grid
            elem="nav"
            elemProps={{
              ...elemProps,
              className: classNames(withPrefix('toolbar'), elemProps?.className),
            }}
            elemRef={elemRef}
            gridTemplateColumns="auto 1fr auto"
            gridAutoFlow="row"
          >
            {slots.Start}
            {slots.Main || <div />}
            {slots.End}
          </Grid>
        )}
      </WithSlots>
    </ToolbarProvider>
  )
}

Toolbar.displayName = 'Toolbar'
