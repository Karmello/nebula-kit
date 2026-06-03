import { Loader, LoaderProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { Box } from '../Box'
import { BOX_META } from '../Box/meta'
import { DEFAULT_LOADER_ACTIVE, DEFAULT_LOADER_SIZE, LOADER_SIZES } from './definitions'

export const LOADER_META = {
  Loader: {
    overview: {
      bundle: 'core',
      title: 'Circular indicator for loading states.',
      features: ['displays a minimal circular spinner to indicate an ongoing operation'],
      composedOf: ['Box'],
      topLevelTags: ['div'],
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
        options: [...LOADER_SIZES, DOCS_CSS_LABEL],
        defaultValue: String(DEFAULT_LOADER_SIZE),
        description: 'Controls the diameter of the loader.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        description: 'Default loader.',
        jsx: <Loader />,
      },
      {
        description: 'Custom loader.',
        jsx: <Loader size="lg" color="blue" />,
      },
      {
        description: 'Absolutely centered Loader rendered inside a parent container with position set to relative.',
        jsx: (
          <Box position="relative">
            <Loader centered />
          </Box>
        ),
      },
    ],
    changelog: {
      '0.9.0': ['added support for predefined size scale values on the `size` prop'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<LoaderProps>,
}
