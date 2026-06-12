import { WithSlots } from 'lib/components/shared'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { useControlled } from 'lib/hooks'
import { Box, Flex, Text } from 'lib/index.core'
import { ActionGroup, TabsPanelProps, TabsProps, TabsTabProps } from 'lib/index.pro'

import { DEFAULT_TABS_DEFAULT_VALUE, DEFAULT_TABS_DIRECTION, DEFAULT_TABS_INTENT, DEFAULT_TABS_SIZE } from './definitions'

export const Tabs = ({
  children,
  tagRef,
  tagAttrs,
  value,
  defaultValue = DEFAULT_TABS_DEFAULT_VALUE,
  onChange,
  color,
  intent = DEFAULT_TABS_INTENT,
  size = DEFAULT_TABS_SIZE,
  direction = DEFAULT_TABS_DIRECTION,
  stretch,
}: TabsProps) => {
  const [currentValue, setCurrentValue] = useControlled<string | number>({ value, defaultValue, onChange })

  return (
    <WithSlots<'Tabs.Tab' | 'Tabs.Panel'>
      childrenToVerify={children}
      componentName="Tabs"
      slotsConfig={[
        { name: 'Tabs.Tab', required: true, allowMultiple: true },
        { name: 'Tabs.Panel', required: true, allowMultiple: true },
      ]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tagRef={tagRef}
            tagAttrs={tagAttrs}
            drawable
            color={color}
            intent={intent}
            variant="outline"
            surface="dividing"
            borderTopWidth={direction === 'row' ? '0px' : undefined}
            borderLeftWidth={direction === 'column' ? '0px' : undefined}
            overflow="clip"
          >
            <Flex flexDirection={direction === 'column' ? 'row' : 'column'} alignItems="stretch">
              <Box overflowX="auto">
                <ActionGroup
                  tagAttrs={{ role: 'tablist', 'aria-orientation': direction === 'row' ? 'horizontal' : 'vertical' }}
                  direction={direction}
                  attach={direction === 'row' ? 'block' : 'inline'}
                  color={color}
                  intent={intent}
                  stretch={stretch}
                >
                  {slotsByName['Tabs.Tab'].map((tab, index) => {
                    const { value, disabled, minInlineSize } = (tab as any).props as TabsTabProps
                    const isSelected = currentValue === value

                    return (
                      <ActionGroup.Item
                        key={index}
                        tagAttrs={{
                          id: `tab-${value}`,
                          role: 'tab',
                          'aria-selected': isSelected,
                          'aria-controls': `panel-${value}`,
                        }}
                        selected={isSelected}
                        disabled={disabled}
                        onClick={() => {
                          setCurrentValue(value)
                        }}
                      >
                        <Flex
                          blockSize={CONTROL_SCALE_MAP[size || 'md'].blockSize}
                          paddingInline={CONTROL_SCALE_MAP[size || 'md'].fontSize}
                          minInlineSize={minInlineSize}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Text
                            tag="span"
                            bold={isSelected}
                            fontSize={CONTROL_SCALE_MAP[size || 'md'].fontSize}
                            lineHeight={CONTROL_SCALE_MAP[size || 'md'].lineHeight}
                          >
                            {tab}
                          </Text>
                        </Flex>
                      </ActionGroup.Item>
                    )
                  })}
                </ActionGroup>
              </Box>
              <Flex.Item flex={direction === 'column' ? '1' : undefined}>
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
                      padding={CONTROL_SCALE_MAP[size || 'md'].fontSize}
                    >
                      {panel}
                    </Box>
                  )
                })}
              </Flex.Item>
            </Flex>
          </Box>
        )
      }}
    </WithSlots>
  )
}

Tabs.displayName = 'Tabs'
