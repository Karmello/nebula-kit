import { BoxProps } from 'lib/index.core'

export type FloatingContentProps = {
  children: BoxProps<'span'>['children']
}

export type FloatingContentInternalProps = {
  // Box
  tagRef?: BoxProps<'span'>['tagRef']
  tagAttrs?: BoxProps<'span'>['tagAttrs']
  // own
  internalOpen: boolean
  setInternalOpen: (internalOpen: boolean) => void
  isOpeningDownwards: boolean
}
