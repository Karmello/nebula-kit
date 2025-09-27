import classNames from 'classnames'

import { WithSlots } from 'lib/components/internal'
import { Grid } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { DEFAULT_SWITCH_AT } from 'lib/definitions'

import { ToolbarProvider } from './ToolbarProvider'
import { ToolbarToggle } from './ToolbarToggle'
import { ToolbarProps } from './definitions'

import './toolbar.scss'

export const Toolbar = ({ children, tagAttrs, tagRef, switchAt = DEFAULT_SWITCH_AT }: ToolbarProps) => {
  return (
    <ToolbarProvider switchAt={switchAt}>
      <WithSlots<'Toolbar.Start' | 'Toolbar.Main' | 'Toolbar.End'>
        componentName="Toolbar"
        slotsConfig={[
          { name: 'Toolbar.Start' },
          { name: 'Toolbar.Main', required: true },
          { name: 'Toolbar.End' },
        ]}
        childrenToVerify={children}
      >
        {({ slots }) => (
          <Grid
            tag="nav"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('toolbar'), tagAttrs?.className),
            }}
            tagRef={tagRef}
            gridTemplateColumns="auto auto 1fr auto"
            gridAutoFlow="row"
          >
            <ToolbarToggle />
            {slots['Toolbar.Start']}
            {slots['Toolbar.Main'] || <div />}
            {slots['Toolbar.End']}
          </Grid>
        )}
      </WithSlots>
    </ToolbarProvider>
  )
}

Toolbar.displayName = 'Toolbar'
