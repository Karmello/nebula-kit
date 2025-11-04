import { ReactElement, useState } from 'react'
import classNames from 'classnames'

import { DropdownList, Button } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { SelectProvider } from './SelectProvider'
import { SelectProps } from './definitions'

export const Select = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // DropdownList
  variant,
  intent,
  size,
  itemBorderIntent,
  scrollAlign,
  inlineSize,
  visibleItemsCount,
  // own
  defaultValue,
  value,
  onChange,
}: SelectProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  return (
    <WithSlots<'DropdownList.Item'>
      childrenToVerify={children}
      componentName="Select"
      slotsConfig={[{ name: 'DropdownList.Item', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        const currentSlotIndex = slotsByName['DropdownList.Item'].findIndex(
          slot => (slot as any).props.value === currentValue
        )

        const currentSlot = slotsByName['DropdownList.Item'][currentSlotIndex] as ReactElement<any>

        return (
          <SelectProvider currentValue={currentValue} handleChange={handleChange}>
            <DropdownList
              tagRef={tagRef}
              tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('select'), tagAttrs?.className) }}
              variant={variant}
              intent={intent}
              size={size}
              inlineSize={inlineSize}
              itemBorderIntent={itemBorderIntent}
              scrollToIndex={currentSlotIndex}
              scrollAlign={scrollAlign}
              visibleItemsCount={visibleItemsCount}
            >
              {({ open }) => (
                <>
                  <DropdownList.Trigger>
                    <Button
                      iconName="chevron-down"
                      iconPosition="right"
                      iconAngle={open ? 180 : 0}
                      justifyContent="space-between"
                    >
                      {currentSlot.props.children || '...'}
                    </Button>
                  </DropdownList.Trigger>
                  {slotsByName['DropdownList.Item']}
                </>
              )}
            </DropdownList>
          </SelectProvider>
        )
      }}
    </WithSlots>
  )
}

Select.displayName = 'Select'
