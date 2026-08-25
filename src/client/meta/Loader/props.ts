import { DEFAULT_LOADER_ACTIVE, DEFAULT_LOADER_SIZE } from 'lib/components/core/Loader/constants'
import { LoaderProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const LOADER_PROPS: Record<keyof LoaderProps, DocProp> = {
  active: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_LOADER_ACTIVE),
    description:
      'Controls whether the Loader is visible. Pass a boolean to show or hide the component without having to wrap it in your own conditional render logic.',
  },
  centered: {
    options: ['boolean'],
    defaultValue: 'false',
    description:
      'Absolutely centers the loader in both axes. Wrap it with an element with "position" set to "relative" to define the centering context.',
  },
  color: BOX_META.props.color,
  size: {
    options: ['string'],
    defaultValue: String(DEFAULT_LOADER_SIZE),
    description: 'Controls the diameter of the loader.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
