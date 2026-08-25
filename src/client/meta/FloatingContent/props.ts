import type { FloatingContentProps } from 'lib/components/pro/Floating/slots/FloatingContent/types'
import type { Prop } from 'client/definitions'

export const FLOATING_CONTENT_PROPS: Record<keyof FloatingContentProps, Prop> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content displayed when the floating layer is open.',
  },
}
