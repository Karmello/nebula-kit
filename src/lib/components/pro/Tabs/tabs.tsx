import { useRef, useState } from 'react'

import { Box, Flex, Segment } from 'lib/components'
import { WithSlots } from 'lib/components/shared'

import { DEFAULT_TABS_INTENT, DEFAULT_TABS_ORIENTATION, DEFAULT_TABS_VARIANT, TabsProps } from './definitions'
import { TabsContext, TabsContextValue } from './TabsContext'

export const Tabs = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_TABS_INTENT,
  variant = DEFAULT_TABS_VARIANT,
  inlineSize,
  // Button
  size,
  // own
  orientation = DEFAULT_TABS_ORIENTATION,
  value,
  defaultValue,
  onChange,
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState<string | number>(defaultValue || 1)
  const ref = useRef<HTMLDivElement | null>(null)

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
        const tabs = [] as TabsContextValue['tabs']
        slotsByName['Tabs.Tab'].forEach(tab => {
          const { value, disabled } = (tab as any).props
          tabs.push({ value, disabled } as TabsContextValue['tabs'][number])
        })

        return (
          <TabsContext
            value={{
              rootRef: tagRef || ref,
              tabs,
              currentValue,
              handleChange,
              color,
              intent,
              size,
              orientation,
            }}
          >
            <Box
              tagAttrs={tagAttrs}
              tagRef={tagRef || ref}
              drawable
              color={color}
              intent={intent}
              variant={variant}
              inlineSize={inlineSize}
              maxInlineSize="100%"
              overflow="hidden"
              display="inline-block"
            >
              <Flex flexDirection={orientation === 'vertical' ? 'row' : 'column'} alignItems="stretch">
                <Box
                  drawable
                  variant="solid"
                  intent={intent}
                  color={color}
                  borderRadius="0px"
                  inlineSize={orientation === 'horizontal' ? '100%' : undefined}
                  maxInlineSize="100%"
                  overflowX={orientation === 'horizontal' ? 'auto' : undefined}
                >
                  <Segment
                    flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
                    tagAttrs={{
                      role: 'tablist',
                      'aria-orientation': orientation,
                    }}
                  >
                    {slotsByName['Tabs.Tab'].map((tab, index) => {
                      return <Segment.Item key={index}>{tab}</Segment.Item>
                    })}
                  </Segment>
                </Box>
                {slotsByName['Tabs.Panel']}
              </Flex>
            </Box>
          </TabsContext>
        )
      }}
    </WithSlots>
  )
}

Tabs.displayName = 'Tabs'
