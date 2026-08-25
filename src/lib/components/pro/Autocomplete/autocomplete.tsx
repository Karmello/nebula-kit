import { useState } from 'react'

import { WithSlots } from 'lib/components/shared'
import { DEFAULT_TSHIRT_SIZE } from 'lib/constants'
import { AutocompleteProps } from 'lib/index.pro'

import { AutocompleteMain } from './components'
import {
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_INTENT,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
  DEFAULT_AUTOCOMPLETE_VISIBLE_ITEMS_COUNT,
} from './constants'

export const Autocomplete = ({
  children,
  tagRef,
  // own
  color,
  intent = DEFAULT_AUTOCOMPLETE_INTENT,
  visibleItemsCount = DEFAULT_AUTOCOMPLETE_VISIBLE_ITEMS_COUNT,
  noOptionsLabel,
  // Box
  inlineSize = DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  disabled,
  defaultValue,
  value,
  onChange,
  onInputChange,
  size = DEFAULT_TSHIRT_SIZE,
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
            tagRef={tagRef}
            intent={intent}
            color={color}
            size={size}
            visibleItemsCount={visibleItemsCount}
            noOptionsLabel={noOptionsLabel}
            inlineSize={inlineSize}
            disabled={disabled}
            onInputChange={onInputChange}
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
