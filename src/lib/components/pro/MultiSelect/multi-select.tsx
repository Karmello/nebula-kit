import { ReactElement, useState } from 'react'
import classNames from 'classnames'

import { DropdownList, DropdownListState, WithSlots } from 'lib/components/shared'
import { CONTROL_SCALE_MAP, DEFAULT_TSHIRT_SIZE } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { SelectOptionProps, Text, Title } from 'lib/index.core'
import { MultiSelectProps } from 'lib/index.pro'

import { DEFAULT_MULTI_SELECT_INLINE_SIZE } from './definitions'
import { MultiSelectProvider } from './MultiSelectProvider'

export const MultiSelect = ({
  // DropdownList
  tagAttrs,
  tagRef,
  color,
  intent,
  scrollAlign,
  visibleItemsCount,
  // Box
  children,
  inlineSize = DEFAULT_MULTI_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  size = DEFAULT_TSHIRT_SIZE,
  dropdownPlacement,
}: MultiSelectProps) => {
  const [dropdownListState, setDropdownListState] = useState<DropdownListState>({
    open: false,
    placement: dropdownPlacement || 'bottom-center',
  })

  const [internalValue, setInternalValue] = useState<string[]>(defaultValue || [])

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    const nextValue = currentValue?.includes(value) ? currentValue.filter(v => v !== value) : [...(currentValue || []), value]

    if (!isControlled) setInternalValue(nextValue)
    onChange?.(nextValue)
  }

  return (
    <WithSlots<'MultiSelect.Option'>
      childrenToVerify={children}
      componentName="MultiSelect"
      slotsConfig={[{ name: 'MultiSelect.Option', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        const currentSlotIndex = slotsByName['MultiSelect.Option'].findIndex(slot => (slot as any).props.value === currentValue)

        const currentLabel = slotsByName['MultiSelect.Option']
          .map(slot => {
            const { value, children } = (slot as any).props
            return { value, label: children }
          })
          .filter(obj => currentValue.includes(obj.value))
          .map(obj => obj.label)
          .join(', ')

        return (
          <MultiSelectProvider currentValue={currentValue} handleChange={handleChange}>
            <DropdownList
              tagRef={tagRef}
              tagAttrs={{
                ...tagAttrs,
                className: classNames(withPrefix('multi-select'), tagAttrs?.className),
              }}
              state={dropdownListState}
              onStateChange={setDropdownListState}
              intent={intent}
              color={color}
              itemBlockSize={Number(CONTROL_SCALE_MAP[size].blockSize.replace('px', ''))}
              scrollToIndex={currentSlotIndex}
              scrollAlign={scrollAlign}
              visibleItemsCount={visibleItemsCount}
              placement={dropdownPlacement}
              keepOpen
            >
              <DropdownList.Trigger
                blockSize={CONTROL_SCALE_MAP[size].blockSize}
                paddingInline={CONTROL_SCALE_MAP[size].fontSize}
                inlineSize={inlineSize}
                disabled={disabled}
                surface={dropdownListState?.open ? 'selected' : undefined}
                ripple={!dropdownListState?.open}
              >
                <Title
                  iconName={dropdownListState?.placement?.startsWith('bottom') ? 'chevron-down' : 'chevron-up'}
                  iconPlacement="right"
                >
                  <Text fontSize={CONTROL_SCALE_MAP[size].fontSize} lineHeight={CONTROL_SCALE_MAP[size].lineHeight} truncate>
                    {currentLabel || 'Select ...'}
                  </Text>
                </Title>
              </DropdownList.Trigger>
              {slotsByName['MultiSelect.Option'].map((slot, index) => {
                const slotProps = (slot as ReactElement<SelectOptionProps>).props
                const isSelected = currentValue.includes(slotProps.value)
                return (
                  <DropdownList.Item
                    key={index}
                    index={index}
                    elevated={dropdownListState?.open}
                    surface={isSelected ? 'selected' : undefined}
                    blockSize={CONTROL_SCALE_MAP[size].blockSize}
                    paddingInline={CONTROL_SCALE_MAP[size].fontSize}
                    inlineSize="100%"
                    onClick={() => handleChange(slotProps.value)}
                    ripple={false}
                  >
                    <Title iconName={isSelected ? 'check' : undefined} iconPlacement="right">
                      <Text
                        fontSize={CONTROL_SCALE_MAP[size].fontSize}
                        lineHeight={CONTROL_SCALE_MAP[size].lineHeight}
                        bold={isSelected}
                      >
                        {slot}
                      </Text>
                    </Title>
                  </DropdownList.Item>
                )
              })}
            </DropdownList>
          </MultiSelectProvider>
        )
      }}
    </WithSlots>
  )
}

MultiSelect.displayName = 'MultiSelect'
