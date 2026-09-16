import { Box } from 'lib/components/core/Box'
import { Text } from 'lib/components/core/Text'
import { CONTROL_SCALE_MAP, NEB_LENGTH } from 'lib/constants'
import { useControlled, useSlots } from 'lib/hooks'

import {
  DEFAULT_TABS_DEFAULT_VALUE,
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_ORIENTATION,
  DEFAULT_TABS_SCALE,
} from './constants'
import type { TabsPanelProps } from './slots/TabsPanel/types'
import type { TabsTabProps } from './slots/TabsTab/types'
import type { TabsProps } from './types'

export const Tabs = ({
  children,
  elemRef,
  elemAttrs,
  value,
  defaultValue = DEFAULT_TABS_DEFAULT_VALUE,
  onChange,
  color,
  intent = DEFAULT_TABS_INTENT,
  scale = DEFAULT_TABS_SCALE,
  orientation = DEFAULT_TABS_ORIENTATION,
  stretch,
}: TabsProps) => {
  const [currentValue, setCurrentValue] = useControlled<string | number>({
    value,
    defaultValue,
    onChange,
  })

  const slots = useSlots<'Tabs.Tab' | 'Tabs.Panel'>({
    childrenToVerify: children,
    componentName: 'Tabs',
    slotsConfig: [
      { name: 'Tabs.Tab', required: true, allowMultiple: true },
      { name: 'Tabs.Panel', required: true, allowMultiple: true },
    ],
  })

  if (!slots) return null

  const { slotsByName } = slots

  return (
    <Box
      elemRef={elemRef}
      elemAttrs={elemAttrs}
      drawable
      color={color}
      intent={intent}
      bgMode="filled"
      borderMode="filled"
      borderRole="edge"
      overflow="clip"
      display="flex"
      flexDirection={orientation === 'vertical' ? 'row' : 'column'}
      alignItems="stretch"
    >
      <Box
        elemAttrs={{
          role: 'tablist',
          'aria-orientation': orientation,
        }}
        flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
        display={stretch ? 'flex' : 'inline-flex'}
        drawable
        borderMode="filled"
        borderRole="edge"
        intent={intent}
        color={color}
        borderRadius={NEB_LENGTH.px_000}
        borderLeftWidth={NEB_LENGTH.px_000}
        borderTopWidth={NEB_LENGTH.px_000}
        borderRightWidth={orientation === 'horizontal' ? NEB_LENGTH.px_000 : undefined}
        borderBottomWidth={orientation === 'vertical' ? NEB_LENGTH.px_000 : undefined}
      >
        {slotsByName['Tabs.Tab'].map((tab, index) => {
          const { value, disabled } = (tab as any).props as TabsTabProps
          const isSelected = currentValue === value

          return (
            <Box
              key={index}
              elemTag="button"
              elemAttrs={{
                id: `tab-${value}`,
                role: 'tab',
                'aria-selected': isSelected,
                'aria-controls': `panel-${value}`,
              }}
              onClick={() => {
                setCurrentValue(value)
              }}
              interactive
              ripple
              disabled={disabled}
              color={color}
              intent={intent}
              bgMode="filled"
              bgRole={isSelected ? 'selection' : undefined}
              borderMode="filled"
              borderRole="divider"
              borderTopWidth={NEB_LENGTH.px_000}
              borderBottomWidth={
                orientation === 'horizontal' || index === slotsByName['Tabs.Tab'].length - 1
                  ? NEB_LENGTH.px_000
                  : undefined
              }
              borderLeftWidth={NEB_LENGTH.px_000}
              borderRightWidth={
                orientation === 'vertical' || index === slotsByName['Tabs.Tab'].length - 1
                  ? NEB_LENGTH.px_000
                  : undefined
              }
              borderRadius={NEB_LENGTH.px_000}
              cursor="pointer"
              display="flex"
              flex={stretch ? '1 0 auto' : undefined}
              justifyContent="center"
              alignItems="center"
              blockSize={CONTROL_SCALE_MAP[scale].blockSize}
              paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
            >
              <Text
                elemTag="span"
                elemAttrs={{
                  style: {
                    WebkitTextStrokeWidth: isSelected ? '1px' : undefined,
                  },
                }}
                fontSize={CONTROL_SCALE_MAP[scale].fontSize}
                lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
              >
                {tab}
              </Text>
            </Box>
          )
        })}
      </Box>
      {slotsByName['Tabs.Panel'].map((panel, index) => {
        const { value } = (panel as any).props as TabsPanelProps
        const isSelected = currentValue === value

        if (!isSelected) return null

        return (
          <Box
            key={index}
            elemAttrs={{
              role: 'tabpanel',
              id: `panel-${value}`,
              'aria-labelledby': `tab-${value}`,
              hidden: !isSelected,
            }}
            drawable
            intent="neutral"
            bgMode="filled"
            borderRadius={NEB_LENGTH.px_000}
            flex={orientation === 'vertical' ? '1' : undefined}
            padding={CONTROL_SCALE_MAP[scale].paddingInline}
          >
            {panel}
          </Box>
        )
      })}
    </Box>
  )
}

Tabs.displayName = 'Tabs'
