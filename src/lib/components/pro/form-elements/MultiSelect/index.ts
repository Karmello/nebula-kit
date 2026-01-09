import { MultiSelect as MultiSelectBase } from './multi-select'

import { MultiSelectOption } from './slots'

export const MultiSelect = Object.assign(MultiSelectBase, {
  Option: MultiSelectOption,
})

export * from './definitions'
export * from './slots'
