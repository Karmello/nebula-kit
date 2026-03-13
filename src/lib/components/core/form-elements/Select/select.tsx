import { ReactElement, useState } from 'react'
import classNames from 'classnames'

import { DropdownList, Button } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { withPrefix } from 'lib/helpers'

import { SelectProvider } from './SelectProvider'
import { DEFAULT_SELECT_OPTION_JUSTIFY_CONTENT } from './slots'
import { DEFAULT_SELECT_INLINE_SIZE, SelectProps } from './definitions'

export const Select = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // DropdownList
  color,
  size,
  intent,
  scrollAlign,
  visibleItemsCount,
  // Box
  inlineSize = DEFAULT_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  dropdownPlacement,
  staticLabel,
}: SelectProps) => {
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
              color={color}
              size={size}
              intent={intent}
              scrollToIndex={currentSlotIndex}
              scrollAlign={scrollAlign}
              visibleItemsCount={visibleItemsCount}
              placement={dropdownPlacement}
            >
              {({ open, resolvedPlacement }) => {
                const opensUpDownwards = ['bottom-start', 'bottom-end', undefined].includes(resolvedPlacement)

                return (
                  <>
                    <DropdownList.Trigger inlineSize={inlineSize} disabled={disabled}>
                      <Button
                        tagAttrs={{
                          'aria-labelledby': tagAttrs?.['aria-labelledby'],
                          style: opensUpDownwards
                            ? {
                                borderBottomLeftRadius: open ? 0 : undefined,
                                borderBottomRightRadius: open ? 0 : undefined,
                              }
                            : {
                                borderTopLeftRadius: open ? 0 : undefined,
                                borderTopRightRadius: open ? 0 : undefined,
                              },
                        }}
                        iconName={opensUpDownwards ? 'chevron-down' : 'chevron-up'}
                        iconPlacement="right"
                        iconAngle={open ? (opensUpDownwards ? 180 : -180) : 0}
                        justifyContent="space-between"
                        size={size}
                        variant="solid"
                        intent={intent}
                        color={color}
                        disabled={disabled}
                        fullWidth
                        ripple={!open}
                        elevated={open}
                        interactive={!open}
                      >
                        {staticLabel || currentSlot?.props.children || 'Select ...'}
                      </Button>
                    </DropdownList.Trigger>
                    {slotsByName['Select.Option'].map((slot, index) => {
                      const slotProps = (slot as ReactElement<any>).props
                      return (
                        <DropdownList.Item
                          key={index}
                          {...slotProps}
                          tagAttrs={{
                            ...slotProps.tagAttrs,
                            onClick: () => handleChange(slotProps.value),
                          }}
                          bold={slotProps.value === currentValue}
                          justifyContent={slotProps.justifyContent || DEFAULT_SELECT_OPTION_JUSTIFY_CONTENT}
                        >
                          {slot}
                        </DropdownList.Item>
                      )
                    })}
                  </>
                )
              }}
            </DropdownList>
          </SelectProvider>
        )
      }}
    </WithSlots>
  )
}

Select.displayName = 'Select'
