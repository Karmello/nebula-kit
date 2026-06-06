import { BoxProps } from 'lib/index.core'

export type FloatingContentProps = {
  children: BoxProps<'span'>['children']
}

export type FloatingContentInternalProps = Pick<BoxProps<'span'>, 'tagRef' | 'tagAttrs'> & {
  internalOpen: boolean
  setInternalOpen: (internalOpen: boolean) => void
  isOpeningDownwards: boolean
}
