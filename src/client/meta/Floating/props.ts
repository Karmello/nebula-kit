import {
  DEFAULT_FLOATING_MODE,
  DEFAULT_FLOATING_PLACEMENT,
  FLOATING_MODE,
  FLOATING_PLACEMENT,
} from 'lib/components/pro/Floating/constants'
import { FloatingProps } from 'lib/components/pro/Floating/types'
import type { DocProp } from 'client/definitions'

export const FLOATING_PROPS: Record<keyof FloatingProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Floating.Trigger + Floating.Content slots.',
  },
  disabled: {
    options: ['boolean'],
    description:
      'Disables the floating interaction, preventing the floating content from opening through trigger hover or click behavior.',
  },
  mode: {
    options: FLOATING_MODE,
    defaultValue: DEFAULT_FLOATING_MODE,
    description: 'Defines which interaction opens the floating content.',
  },
  offset: {
    options: ['number'],
    description: 'Sets the distance between the trigger and floating content.',
  },
  onOpenChange: {
    options: ['(open: boolean) => void'],
    description: 'Callback fired when the floating content requests to open or close.',
  },
  onPlacementChange: {
    options: ['placement => void'],
    description: 'Callback fired when the resolved placement changes.',
  },
  open: {
    options: ['boolean'],
    description: 'Controls whether the floating content is currently visible.',
  },
  placement: {
    options: FLOATING_PLACEMENT,
    defaultValue: DEFAULT_FLOATING_PLACEMENT,
    description: 'Defines the preferred position of the floating content relative to the trigger.',
  },
}
