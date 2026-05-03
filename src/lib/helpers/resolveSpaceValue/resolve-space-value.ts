import { RespValue, SPACING_VALUES, Spacings, SpacingValue } from 'lib/definitions'

export const resolveSpacingValue = (value: RespValue<SpacingValue>): RespValue<string> => {
  const resolve = (v: SpacingValue) => SPACING_VALUES[v as Spacings] ?? v

  if (typeof value === 'string') {
    return resolve(value)
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== undefined)
      .map(([breakpoint, v]) => [breakpoint, resolve(v as SpacingValue)])
  ) as RespValue<string>
}
