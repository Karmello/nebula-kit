import { useState } from 'react'

import { WithSlots } from 'lib/components/core/internal'

import { DEFAULT_AUTOCOMPLETE_INLINE_SIZE, AutocompleteProps } from './definitions'
import { AutocompleteMain } from './components'

export const Autocomplete = ({
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
  inlineSize = DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  dropdownPlacement,
}: AutocompleteProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  return (
    <WithSlots<'Autocomplete.Option'>
      childrenToVerify={children}
      componentName="Autocomplete"
      slotsConfig={[{ name: 'Autocomplete.Option', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <AutocompleteMain
            tagAttrs={tagAttrs}
            tagRef={tagRef}
            intent={intent}
            color={color}
            size={size}
            itemBorderIntent={itemBorderIntent}
            scrollAlign={scrollAlign}
            visibleItemsCount={visibleItemsCount}
            inlineSize={inlineSize}
            disabled={disabled}
            dropdownPlacement={dropdownPlacement}
            // extra
            items={slotsByName['Autocomplete.Option']}
            currentValue={currentValue}
            handleChange={handleChange}
          />
        )
      }}
    </WithSlots>
  )
}

Autocomplete.displayName = 'Autocomplete'
