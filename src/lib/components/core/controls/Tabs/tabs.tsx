import { useState } from 'react'

import { Box, Segment } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'

import { TabsProps, DEFAULT_TABS_VARIANT, DEFAULT_TABS_INTENT } from './definitions'
import { TabsContext } from './TabsContext'

export const Tabs = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  color,
  intent = DEFAULT_TABS_INTENT,
  variant = DEFAULT_TABS_VARIANT,
  inlineSize,
  maxInlineSize,
  minInlineSize,
  // own
  value,
  defaultValue,
  onChange,
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState<TabsProps['value'] | undefined>(defaultValue || 1)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string | number) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

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
          <TabsContext value={{ currentValue, color, intent }}>
            <Box
              tagAttrs={tagAttrs}
              tagRef={tagRef}
              drawable
              color={color}
              intent={intent}
              variant={variant}
              inlineSize={inlineSize}
              maxInlineSize={maxInlineSize}
              minInlineSize={minInlineSize}
              overflow="hidden"
              display="inline-block"
            >
              <Box drawable variant="solid" intent={intent} color={color} borderRadius="0px">
                <Segment>
                  {slotsByName['Tabs.Tab'].map((tab, index) => {
                    const { value, disabled } = (tab as any).props

                    return (
                      <Segment.Item
                        key={index}
                        tagAttrs={{
                          onClick: () => {
                            if (!disabled) handleChange(value)
                          },
                        }}
                      >
                        {tab}
                      </Segment.Item>
                    )
                  })}
                </Segment>
              </Box>
              {slotsByName['Tabs.Panel']}
            </Box>
          </TabsContext>
        )
      }}
    </WithSlots>
  )
}

Tabs.displayName = 'Tabs'
