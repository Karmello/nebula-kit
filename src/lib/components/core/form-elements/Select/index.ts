import { Select as SelectBase } from './select'

import { SelectOption } from './slots'

export const Select = Object.assign(SelectBase, {
  Option: SelectOption,
})

export * from './definitions'
export * from './slots'
