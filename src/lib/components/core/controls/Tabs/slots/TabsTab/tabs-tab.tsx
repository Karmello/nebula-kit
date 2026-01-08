import { Button } from 'lib/components'

import { TabsTabProps } from './definitions'
import { useTabsContext } from '../../TabsContext'

export const TabsTab = ({
  // Button
  children,
  customSvgIcon,
  disabled,
  iconName,
  iconPlacement,
  justifyContent,
  tagAttrs,
  tagRef,
  // own
  value,
}: TabsTabProps) => {
  const { currentValue, color, intent } = useTabsContext()

  return (
    <Button
      bold={currentValue === value}
      highlighted={currentValue === value}
      color={color}
      customSvgIcon={customSvgIcon}
      disabled={disabled}
      iconName={iconName}
      iconPlacement={iconPlacement}
      intent={intent}
      justifyContent={justifyContent}
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          borderRadius: '0px',
        },
      }}
      tagRef={tagRef}
    >
      {children}
    </Button>
  )
}

TabsTab.displayName = 'Tabs.Tab'
