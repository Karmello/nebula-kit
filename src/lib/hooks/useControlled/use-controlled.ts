import { useState } from 'react'

export const useControlled = <T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}): [T | undefined, (value: T) => void] => {
  const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue)

  const isControlled = value !== undefined

  const currentValue = isControlled ? value : internalValue

  const setValue = (nextValue: T) => {
    if (!isControlled) {
      setInternalValue(nextValue)
    }

    onChange?.(nextValue)
  }

  return [currentValue, setValue]
}
