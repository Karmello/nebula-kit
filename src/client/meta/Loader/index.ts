import { DEFAULT_LOADER_ACTIVE, DEFAULT_LOADER_SIZE } from 'lib/components/core/Loader/constants'
import { LoaderProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { LOADER_CHANGELOG } from './changelog'
import { LOADER_EXAMPLES } from './examples'

export const LOADER_META = {
  Loader: {
    overview: {
      bundle: 'core',
      title: 'Circular indicator for loading states.',
      features: ['displays a minimal circular spinner to indicate an ongoing operation'],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
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
      color: BOX_META.Box.props.color,
      size: {
        options: ['string'],
        defaultValue: String(DEFAULT_LOADER_SIZE),
        description: 'Controls the diameter of the loader.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: LOADER_EXAMPLES,
    changelog: LOADER_CHANGELOG,
  } satisfies ComponentMeta<LoaderProps>,
}
