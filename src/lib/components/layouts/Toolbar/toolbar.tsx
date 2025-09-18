import classNames from 'classnames'

import { WithSlots } from 'lib/components/internal'
import { Flex } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { ToolbarProps } from './definitions'

export const Toolbar = ({ children, elemProps, elemRef }: ToolbarProps) => {
  return (
    <WithSlots<'Start' | 'Main' | 'End'>
      componentName="Toolbar"
      slotsConfig={[{ name: 'Start', required: true }, { name: 'Main' }, { name: 'End' }]}
      childrenToVerify={children}
    >
      {slots => (
        <Flex
          elem="nav"
          elemProps={{ ...elemProps, className: classNames(withPrefix('toolbar'), elemProps?.className) }}
          elemRef={elemRef}
          flexDirection="row"
          flexWrap="nowrap"
        >
          {slots.Start}
          {slots.Main || <div />}
          {slots.End}
        </Flex>
      )}
    </WithSlots>
  )
}

Toolbar.displayName = 'Toolbar'
