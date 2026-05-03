import { RespValue, SPACING_VALUES, Spacings } from 'lib/definitions'

export const resolveSpacingValue = (value: RespValue<Spacings | string>): RespValue<string> => {
  const resolve = (v: Spacings | string) => SPACING_VALUES[v as Spacings] ?? v

  if (typeof value === 'string') {
    return resolve(value)
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== undefined)
      .map(([breakpoint, v]) => [breakpoint, resolve(v as Spacings | string)])
  ) as RespValue<string>
}
