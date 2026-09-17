import { BOX_COLORS } from 'lib/components/core/Box/constants'
import { DEFAULT_LOADER_ACTIVE, DEFAULT_LOADER_SIZE } from 'lib/components/core/Loader/constants'
import { LoaderProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const LOADER_PROPS: Record<keyof LoaderProps, DocProp> = {
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  active: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_LOADER_ACTIVE),
    description:
      'Controls whether the Loader is visible. Pass a boolean to show or hide the component without having to wrap it in your own conditional render logic.',
  },
  // appearance
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'appearance',
  },
  size: {
    options: ['string'],
    defaultValue: String(DEFAULT_LOADER_SIZE),
    description: 'Controls the diameter of the loader.',
    group: 'appearance',
  },
  // layout
  centered: {
    options: ['boolean'],
    defaultValue: 'false',
    description:
      'Absolutely centers the loader in both axes. Wrap it with an element with "position" set to "relative" to define the centering context.',
    group: 'layout',
  },
}
