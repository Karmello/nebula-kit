import { useState } from 'react'

import { WithSlots } from 'lib/components/shared'
import { DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { AutocompleteProps } from 'lib/index.pro'

import { AutocompleteMain } from './components'
import {
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_INTENT,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
} from './definitions'

export const Autocomplete = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // DropdownList
  color,
  intent = DEFAULT_AUTOCOMPLETE_INTENT,
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
  size = DEFAULT_CONTROL_SIZE,
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
