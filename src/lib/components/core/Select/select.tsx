import { ReactElement, useState } from 'react'
import classNames from 'classnames'

import { Text, WithIcon } from 'lib/components'
import { WithSlots, DropdownList, DropdownListProps } from 'lib/components/shared'
import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import { SelectProvider } from './SelectProvider'
import { DEFAULT_SELECT_INLINE_SIZE, DEFAULT_SELECT_INTENT, SelectProps } from './definitions'

export const Select = ({
  // DropdownList
  tagAttrs,
  tagRef,
  scrollAlign,
  visibleItemsCount,
  // ActionSurface
  color,
  intent = DEFAULT_SELECT_INTENT,
  // Box
  children,
  inlineSize = DEFAULT_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  size = DEFAULT_CONTROL_SIZE,
  dropdownPlacement,
  staticLabel,
}: SelectProps) => {
  const [dropdownListState, setDropdownListState] = useState<DropdownListProps['state']>({
    open: false,
    placement: dropdownPlacement,
  })

  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  return (
    <WithSlots<'Select.Option'>
      childrenToVerify={children}
      componentName="Select"
      slotsConfig={[{ name: 'Select.Option', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        const currentSlotIndex = slotsByName['Select.Option'].findIndex(slot => (slot as any).props.value === currentValue)
        const currentSlot = slotsByName['Select.Option'][currentSlotIndex] as ReactElement<any>

        return (
          <SelectProvider currentValue={currentValue} handleChange={handleChange}>
            <DropdownList
              tagRef={tagRef}
              tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('select'), tagAttrs?.className) }}
              state={dropdownListState}
              onStateChange={setDropdownListState}
              itemBlockSize={Number(CONTROL_SIZE_MAP[size || 'md'].blockSize.replace('px', ''))}
              scrollToIndex={currentSlotIndex}
              scrollAlign={scrollAlign}
              visibleItemsCount={visibleItemsCount}
              placement={dropdownPlacement}
              color={color}
              intent={intent}
            >
              <DropdownList.Trigger
                blockSize={CONTROL_SIZE_MAP[size].blockSize}
                paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
                inlineSize={inlineSize}
                disabled={disabled}
                selected={dropdownListState.open}
                ripple={!dropdownListState.open}
              >
                <WithIcon
                  iconName={dropdownListState.placement?.startsWith('bottom') ? 'chevron-down' : 'chevron-up'}
                  iconPlacement="right"
                  justifyContent="space-between"
                  iconAngle={dropdownListState.open ? 180 : 0}
                  iconSize={CONTROL_SIZE_MAP[size].iconSize}
                >
                  <Text fontSize={CONTROL_SIZE_MAP[size].fontSize} lineHeight={CONTROL_SIZE_MAP[size].lineHeight}>
                    {staticLabel || currentSlot}
                  </Text>
                </WithIcon>
              </DropdownList.Trigger>
              {slotsByName['Select.Option'].map((slot, index) => {
                const slotProps = (slot as ReactElement<any>).props
                return (
                  <DropdownList.Item
                    key={index}
                    index={index}
                    elevated={dropdownListState.open}
                    selected={index === currentSlotIndex}
                    blockSize={CONTROL_SIZE_MAP[size].blockSize}
                    paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
                    inlineSize="100%"
                    onClick={() => handleChange(slotProps.value)}
                  >
                    <Text
                      fontSize={CONTROL_SIZE_MAP[size].fontSize}
                      lineHeight={CONTROL_SIZE_MAP[size].lineHeight}
                      bold={index === currentSlotIndex}
                    >
                      {slot}
                    </Text>
                  </DropdownList.Item>
                )
              })}
            </DropdownList>
          </SelectProvider>
        )
      }}
    </WithSlots>
  )
}

Select.displayName = 'Select'
