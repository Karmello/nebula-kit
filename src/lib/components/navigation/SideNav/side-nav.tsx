import classNames from 'classnames'

import { WithSlots } from 'lib/components/internal'
import { Flex } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { BOX_BORDER_WIDTH } from 'lib/components/base/Box/definitions'

import { SideNavProvider } from './SideNavProvider'
import { SideNavToggle } from './components'
import { DEFAULT_SIDE_NAV_EXPAND_MODE, SideNavProps } from './definitions'

import './side-nav.scss'

export const SideNav = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // Flex
  rowGap,
  // Button
  color,
  intent,
  // own
  expandMode = DEFAULT_SIDE_NAV_EXPAND_MODE,
  variant,
}: SideNavProps) => {
  const finalRowGap = rowGap !== undefined ? rowGap : BOX_BORDER_WIDTH

  return (
    <WithSlots<'SideNav.Category' | 'SideNav.Item'>
      componentName="SideNav"
      slotsConfig={[
        { name: 'SideNav.Category', allowMultiple: true },
        { name: 'SideNav.Item', allowMultiple: true },
      ]}
      someRequired
      childrenToVerify={children}
    >
      {({ slotsByName, allValidSlots }) => (
        <SideNavProvider
          expandMode={expandMode}
          rowGap={finalRowGap}
          variant={variant}
          color={color}
          intent={intent}
        >
          <Flex
            tag="nav"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('side-nav'), tagAttrs?.className || ''),
            }}
            tagRef={tagRef}
            flexDirection="column"
            rowGap={finalRowGap}
          >
            {slotsByName['SideNav.Category'].length ? <SideNavToggle /> : null}
            {allValidSlots}
          </Flex>
        </SideNavProvider>
      )}
    </WithSlots>
  )
}

SideNav.displayName = 'SideNav'
