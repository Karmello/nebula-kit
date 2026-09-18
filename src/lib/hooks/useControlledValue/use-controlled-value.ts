import { useEffect, useState } from 'react'

export const useControlledValue = <T>({
  value,
  defaultValue,
  onChange,
}: {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}): [T | undefined, (value: T) => void, boolean] => {
  const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue)

  const isControlled = value !== undefined

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value)
    }
  }, [isControlled, value])

  const currentValue = isControlled ? value : internalValue

  const setValue = (nextValue: T) => {
    if (!isControlled) {
      setInternalValue(nextValue)
    }

    onChange?.(nextValue)
  }

  return [currentValue, setValue, isControlled]
}
