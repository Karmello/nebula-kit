import { RespValue, LENGTH_VALUES, TShirtSize, LengthValue } from 'lib/definitions'

export const resolveLengthValue = (value: RespValue<LengthValue | 'auto'>): RespValue<string> => {
  const resolve = (v: LengthValue | 'auto') => LENGTH_VALUES[v as TShirtSize] ?? v

  if (typeof value === 'string') {
    return resolve(value)
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== undefined)
      .map(([breakpoint, v]) => [breakpoint, resolve(v as LengthValue | 'auto')])
  ) as RespValue<string>
}
