import type { SplitViewMainBarProps } from 'lib/components/pro/SplitView/slots/SplitViewMainBar/types'
import type { DocProp } from 'client/definitions'

export const SPLIT_VIEW_MAIN_BAR_PROPS: Record<keyof SplitViewMainBarProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
}
