import { Autocomplete as AutocompleteBase } from './autocomplete'
import { AutocompleteOption } from './slots'

export const Autocomplete = Object.assign(AutocompleteBase, {
  Option: AutocompleteOption,
})

export * from './definitions'
export * from './slots'
