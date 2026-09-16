import { Box } from 'lib/components/core/Box'
import { Text } from 'lib/components/core/Text'
import { CONTROL_SCALE_MAP, NEB_LENGTH } from 'lib/constants'
import { useControlled, useSlots } from 'lib/hooks'

import {
  DEFAULT_TABS_DEFAULT_VALUE,
  DEFAULT_TABS_DIRECTION,
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_SCALE,
} from './constants'
import type { TabsPanelProps } from './slots/TabsPanel/types'
import type { TabsTabProps } from './slots/TabsTab/types'
import type { TabsProps } from './types'

export const Tabs = ({
  children,
  tagRef,
  tagAttrs,
  value,
  defaultValue = DEFAULT_TABS_DEFAULT_VALUE,
  onChange,
  color,
  intent = DEFAULT_TABS_INTENT,
  scale = DEFAULT_TABS_SCALE,
  direction = DEFAULT_TABS_DIRECTION,
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
      tagRef={tagRef}
      tagAttrs={tagAttrs}
      drawable
      color={color}
      intent={intent}
      bgMode="filled"
      borderMode="filled"
      borderRole="edge"
      overflow="clip"
      display="flex"
      flexDirection={direction === 'column' ? 'row' : 'column'}
      alignItems="stretch"
    >
      <Box
        tagAttrs={{
          role: 'tablist',
          'aria-orientation': direction === 'row' ? 'horizontal' : 'vertical',
        }}
        flexDirection={direction}
        display={stretch ? 'flex' : 'inline-flex'}
      >
        {slotsByName['Tabs.Tab'].map((tab, index) => {
          const { value, disabled } = (tab as any).props as TabsTabProps
          const isSelected = currentValue === value

          return (
            <Box
              key={index}
              tag="button"
              tagAttrs={{
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
                direction === 'column' && index === slotsByName['Tabs.Tab'].length - 1
                  ? NEB_LENGTH.px_000
                  : undefined
              }
              borderLeftWidth={NEB_LENGTH.px_000}
              borderRightWidth={
                direction === 'row' && index === slotsByName['Tabs.Tab'].length - 1
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
                tag="span"
                tagAttrs={{
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
            tagAttrs={{
              role: 'tabpanel',
              id: `panel-${value}`,
              'aria-labelledby': `tab-${value}`,
              hidden: !isSelected,
            }}
            drawable
            intent="neutral"
            bgMode="filled"
            borderRadius={NEB_LENGTH.px_000}
            flex={direction === 'column' ? '1' : undefined}
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
