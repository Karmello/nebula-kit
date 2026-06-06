import { FLOATING_TRIGGER_DISPLAY } from 'lib/components/pro/Floating/slots/FloatingTrigger/constants'
import { BoxProps } from 'lib/index.core'

export type FloatingTriggerDisplay = (typeof FLOATING_TRIGGER_DISPLAY)[number]

export type FloatingTriggerProps = {
  children: BoxProps<'span'>['children']
  display?: FloatingTriggerDisplay
} & Pick<BoxProps<'span'>, 'cursor'>

export type FloatingTriggerInternalProps = Pick<BoxProps<'span'>, 'tagRef' | 'tagAttrs'>
