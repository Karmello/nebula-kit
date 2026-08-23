import { WithSlots } from 'lib/components/shared'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { useControlled } from 'lib/hooks'
import { Box, Text } from 'lib/index.core'
import { TabsPanelProps, TabsProps, TabsTabProps } from 'lib/index.pro'

import {
  DEFAULT_TABS_DEFAULT_VALUE,
  DEFAULT_TABS_DIRECTION,
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_SIZE,
} from './constants'

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
  const [currentValue, setCurrentValue] = useControlled<string | number>({
    value,
    defaultValue,
    onChange,
  })

  const attach = direction === 'row' ? 'block' : ('inline' as any)

  let zeroTopLeft = false
  let zeroTopRight = false
  let zeroBottomLeft = false
  let zeroBottomRight = false

  if (attach === 'top' || attach === 'block') {
    zeroTopLeft = true
    zeroTopRight = true
  }

  if (attach === 'right' || attach === 'inline') {
    zeroTopRight = true
    zeroBottomRight = true
  }

  if (attach === 'bottom' || attach === 'block') {
    zeroBottomLeft = true
    zeroBottomRight = true
  }

  if (attach === 'left' || attach === 'inline') {
    zeroBottomLeft = true
    zeroTopLeft = true
  }

  const gap = '2px'

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
            <Box
              display="flex"
              flexDirection={direction === 'column' ? 'row' : 'column'}
              alignItems="stretch"
            >
              <Box overflowX="auto">
                <Box
                  tagAttrs={{
                    ...tagAttrs,
                    role: 'tablist',
                    'aria-orientation': direction === 'row' ? 'horizontal' : 'vertical',
                  }}
                  color={color}
                  intent={intent}
                  tagRef={tagRef}
                  drawable
                  surface="dividing"
                  variant="solid"
                  inlineSize="max-content"
                  minInlineSize="100%"
                  overflow="clip"
                  borderTopLeftRadius={zeroTopLeft ? '0px' : undefined}
                  borderTopRightRadius={zeroTopRight ? '0px' : undefined}
                  borderBottomRightRadius={zeroBottomRight ? '0px' : undefined}
                  borderBottomLeftRadius={zeroBottomLeft ? '0px' : undefined}
                  paddingTop={attach === 'top' || attach === 'block' ? gap : undefined}
                  paddingRight={attach === 'right' || attach === 'inline' ? gap : undefined}
                  paddingBottom={attach === 'bottom' || attach === 'block' ? gap : undefined}
                  paddingLeft={attach === 'left' || attach === 'inline' ? gap : undefined}
                >
                  <Box
                    flexDirection={direction}
                    alignItems="stretch"
                    display={stretch ? 'flex' : 'inline-flex'}
                    gap={gap}
                  >
                    {slotsByName['Tabs.Tab'].map((tab, index) => {
                      const { value, disabled, minInlineSize } = (tab as any).props as TabsTabProps
                      const isSelected = currentValue === value

                      return (
                        <Box
                          key={index}
                          tagAttrs={{
                            id: `tab-${value}`,
                            role: 'tab',
                            'aria-selected': isSelected,
                            'aria-controls': `panel-${value}`,
                            onClick: () => {
                              setCurrentValue(value)
                            },
                          }}
                          flex={stretch ? '1 0 auto' : undefined}
                          surface={isSelected ? 'selected' : undefined}
                          disabled={disabled}
                        >
                          <Box
                            drawable
                            color={color}
                            intent={intent}
                            surface={isSelected ? 'selected' : undefined}
                            disabled={disabled}
                            minInlineSize="100%"
                            interactive
                            cursor="pointer"
                            variant="solid"
                            borderRadius="0px"
                          >
                            <Box
                              display="flex"
                              tagAttrs={{
                                style: {
                                  blockSize: CONTROL_SCALE_MAP[size || 'md'].blockSize,
                                  paddingInline: CONTROL_SCALE_MAP[size || 'md'].paddingInline,
                                  minInlineSize,
                                },
                              }}
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
                            </Box>
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>
                </Box>
              </Box>
              <Box flex={direction === 'column' ? '1' : undefined}>
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
              </Box>
            </Box>
          </Box>
        )
      }}
    </WithSlots>
  )
}

Tabs.displayName = 'Tabs'
