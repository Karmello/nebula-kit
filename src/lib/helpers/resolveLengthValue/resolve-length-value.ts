import { RespValue, LENGTH_VALUES, Length, LengthValue } from 'lib/definitions'

export const resolveLengthValue = (value: RespValue<LengthValue>): RespValue<string> => {
  const resolve = (v: LengthValue) => LENGTH_VALUES[v as Length] ?? v

  if (typeof value === 'string') {
    return resolve(value)
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== undefined)
      .map(([breakpoint, v]) => [breakpoint, resolve(v as LengthValue)])
  ) as RespValue<string>
}
