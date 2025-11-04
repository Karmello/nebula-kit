import { Select as SelectBase } from './select'

import { SelectOption } from './slots'

export const Select = Object.assign(SelectBase, {
  Option: SelectOption,
})

export { type SelectProps } from './definitions'
export type { SelectOptionProps } from './slots'
