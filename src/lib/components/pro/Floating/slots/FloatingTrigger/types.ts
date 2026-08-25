import { BoxProps } from 'lib/components/core/Box'
import { FLOATING_TRIGGER_DISPLAY } from 'lib/components/pro/Floating/slots/FloatingTrigger/constants'

export type FloatingTriggerDisplay = (typeof FLOATING_TRIGGER_DISPLAY)[number]

export type FloatingTriggerProps = {
  // own
  children: BoxProps<'span'>['children']
  display?: FloatingTriggerDisplay
  // Box
  cursor?: BoxProps<'span'>['cursor']
}

export type FloatingTriggerInternalProps = {
  tagRef?: BoxProps<'span'>['tagRef']
  tagAttrs?: BoxProps<'span'>['tagAttrs']
}
