import { BoxProps } from 'lib/index.core'

export type FloatingTriggerProps = {
  children: BoxProps<'span'>['children']
}

export type FloatingTriggerInternalProps = Pick<BoxProps<'span'>, 'tagRef' | 'tagAttrs'>
