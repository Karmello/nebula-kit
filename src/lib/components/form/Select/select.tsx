import { useState } from 'react'
import classNames from 'classnames'

import { DropdownList, Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SelectProps } from './definitions'

export const Select = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // DropdownList
  itemBorderIntent,
  scrollAlign,
  // Box
  inlineSize,
  // Button
  variant,
  intent,
  size,
  // own
  options,
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
    <DropdownList
      tagRef={tagRef}
      tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('select'), tagAttrs?.className) }}
      size={size}
      inlineSize={inlineSize}
      itemBorderIntent={itemBorderIntent}
      scrollToIndex={options.findIndex(o => o.value === currentValue)}
      scrollAlign={scrollAlign}
    >
      {({ open }) => (
        <>
          <DropdownList.Trigger>
            <Button
              iconName="chevron-down"
              iconPosition="right"
              iconAngle={open ? 180 : 0}
              size={size}
              variant={variant}
              intent={intent}
              justifyContent="space-between"
            >
              {options.find(o => o.value === currentValue)?.label}
            </Button>
          </DropdownList.Trigger>
          {options.map(({ value, label }) => (
            <DropdownList.Item
              key={value}
              tagAttrs={{
                onClick: () => handleChange(value),
              }}
              justifyContent="flex-start"
            >
              {label}
            </DropdownList.Item>
          ))}
        </>
      )}
    </DropdownList>
  )
}

Select.displayName = 'Select'
