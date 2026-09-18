import { useState } from 'react'

import { DEFAULT_TSHIRT_SIZE } from 'lib/constants'
import { useSlots } from 'lib/hooks'

import { AutocompleteMain } from './components'
import {
  DEFAULT_AUTOCOMPLETE_DISABLE_FILTERING,
  DEFAULT_AUTOCOMPLETE_INLINE_SIZE,
  DEFAULT_AUTOCOMPLETE_INTENT,
  DEFAULT_AUTOCOMPLETE_SHOW_TOGGLE,
  DEFAULT_AUTOCOMPLETE_VISIBLE_ITEMS_COUNT,
} from './constants'
import { AutocompleteProps } from './types'

export const Autocomplete = ({
  children,
  elemRef,
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
  scale = DEFAULT_TSHIRT_SIZE,
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

  const slots = useSlots<'Autocomplete.Option'>({
    childrenToVerify: children,
    componentName: 'Autocomplete',
    slotsConfig: [{ name: 'Autocomplete.Option', allowMultiple: true }],
  })

  if (!slots) return null

  return (
    <AutocompleteMain
      elemRef={elemRef}
      intent={intent}
      color={color}
      scale={scale}
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
      items={slots.slotsByName['Autocomplete.Option']}
      currentValue={currentValue}
      handleChange={handleChange}
    />
  )
}

Autocomplete.displayName = 'Autocomplete'
