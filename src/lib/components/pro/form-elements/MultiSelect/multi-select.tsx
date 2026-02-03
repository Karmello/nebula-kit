import { ReactElement, useState } from 'react'
import classNames from 'classnames'

import { DropdownList, Button } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { withPrefix } from 'lib/helpers'

import { MultiSelectProvider } from './MultiSelectProvider'
import { DEFAULT_MULTI_SELECT_OPTION_JUSTIFY_CONTENT } from './slots'
import { DEFAULT_MULTI_SELECT_INLINE_SIZE, MultiSelectProps } from './definitions'

export const MultiSelect = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // DropdownList
  intent,
  color,
  size,
  itemBorderIntent,
  scrollAlign,
  visibleItemsCount,
  // Box
  inlineSize = DEFAULT_MULTI_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  dropdownPlacement,
}: MultiSelectProps) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue || [])

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    const nextValue = currentValue?.includes(value)
      ? currentValue.filter(v => v !== value)
      : [...(currentValue || []), value]

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
        const currentSlotIndex = slotsByName['MultiSelect.Option'].findIndex(
          slot => (slot as any).props.value === currentValue
        )

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
              intent={intent}
              color={color}
              size={size}
              itemBorderIntent={itemBorderIntent}
              scrollToIndex={currentSlotIndex}
              scrollAlign={scrollAlign}
              visibleItemsCount={visibleItemsCount}
              placement={dropdownPlacement}
              keepOpen
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
                        highlighted={open}
                      >
                        {currentLabel || 'Select ...'}
                      </Button>
                    </DropdownList.Trigger>
                    {slotsByName['MultiSelect.Option'].map((slot, index) => {
                      const slotProps = (slot as ReactElement<any>).props
                      return (
                        <DropdownList.Item
                          key={index}
                          {...slotProps}
                          tagAttrs={{
                            ...slotProps.tagAttrs,
                            onClick: () => handleChange(slotProps.value),
                          }}
                          bold={currentValue.includes(slotProps.value)}
                          justifyContent={
                            slotProps.justifyContent || DEFAULT_MULTI_SELECT_OPTION_JUSTIFY_CONTENT
                          }
                        >
                          {slot}
                        </DropdownList.Item>
                      )
                    })}
                  </>
                )
              }}
            </DropdownList>
          </MultiSelectProvider>
        )
      }}
    </WithSlots>
  )
}

MultiSelect.displayName = 'MultiSelect'
