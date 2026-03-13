import { useState } from 'react'

import { WithSlots } from 'lib/components/core/internal'

import {
  AutocompleteProps,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
} from './definitions'

import { AutocompleteMain } from './components'

export const Autocomplete = ({
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
  noOptionsLabel,
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
  debounceDelay,
  placeholder,
  showToggle = DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
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
            scrollAlign={scrollAlign}
            visibleItemsCount={visibleItemsCount}
            noOptionsLabel={noOptionsLabel}
            inlineSize={inlineSize}
            disabled={disabled}
            onInputChange={onInputChange}
            dropdownPlacement={dropdownPlacement}
            disableFiltering={disableFiltering}
            debounceDelay={debounceDelay}
            placeholder={placeholder}
            showToggle={showToggle}
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
