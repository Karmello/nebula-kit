import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  BREADCRUMB_TAGS,
  BREADCRUMB_VARIANTS,
  DEFAULT_BREADCRUMB_INTENT,
  DEFAULT_BREADCRUMB_VARIANT,
} from 'lib/components/pro/Breadcrumb/constants'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { BreadcrumbProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const BREADCRUMB_PROPS: Record<keyof BreadcrumbProps, DocProp> = {
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  defaultPath: {
    options: ['string[]'],
    description:
      'Initial breadcrumb path applied once to seed internal state when the component is uncontrolled.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_BREADCRUMB_INTENT),
    description: 'Color tone applied to the list.',
  },
  onChange: {
    options: ['(path: string[]) => void'],
    description: 'Called when the user selects a value, receiving the updated breadcrumb path.',
  },
  path: {
    options: ['string[]'],
    description: 'Controls the active breadcrumb path, enabling fully controlled behavior.',
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TSHIRT_SIZE,
  },
  elemTag: {
    options: BREADCRUMB_TAGS,
    defaultValue: 'div',
    description: 'The HTML tag to be rendered.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  tree: {
    options: ['object[]'],
    isRequired: true,
    description:
      'Hierarchical data source that defines the breadcrumb structure and available selections.',
  },
  variant: {
    options: BREADCRUMB_VARIANTS,
    defaultValue: DEFAULT_BREADCRUMB_VARIANT,
    description: 'Visual style variant applied to the dropdown menu. The trigger is unaffected.',
  },
}
