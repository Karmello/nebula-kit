import type { FloatingContentProps } from 'lib/components/pro/Floating/slots/FloatingContent/types'
import type { DocProp } from 'client/definitions'

export const FLOATING_CONTENT_PROPS: Record<keyof FloatingContentProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content displayed when the floating layer is open.',
  },
}
