import { useState } from 'react'

import { WithSlots } from 'lib/components/core/internal'

import {
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  AutocompleteProps,
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
} from './definitions'

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
  noOptionsLabel,
  onClosed,
  // Box
  inlineSize = DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  onInputChange,
  dropdownPlacement,
  disableFiltering = DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  placeholder,
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
      slotsConfig={[{ name: 'Autocomplete.Option', allowMultiple: true }]}
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
            noOptionsLabel={noOptionsLabel}
            onClosed={onClosed}
            inlineSize={inlineSize}
            disabled={disabled}
            onInputChange={onInputChange}
            dropdownPlacement={dropdownPlacement}
            disableFiltering={disableFiltering}
            placeholder={placeholder}
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
