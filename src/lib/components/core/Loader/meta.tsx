import { PROP_GROUPS } from 'lib/constants'
import { Loader, LoaderProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { Box } from '../Box'
import { BOX_META } from '../Box/meta'
import { DEFAULT_LOADER_ACTIVE, DEFAULT_LOADER_SIZE } from './definitions'

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
        group: PROP_GROUPS.STATE,
        options: ['boolean'],
        defaultValue: String(DEFAULT_LOADER_ACTIVE),
        description:
          'Controls whether the Loader is visible. Pass a boolean to show or hide the component without having to wrap it in your own conditional render logic.',
      },
      color: BOX_META.Box.props.color,
      centered: {
        group: PROP_GROUPS.LAYOUT,
        options: ['boolean'],
        defaultValue: 'false',
        description:
          'Absolutely centers the loader in both axes. Wrap it with an element with "position" set to "relative" to define the centering context.',
      },
      size: {
        group: PROP_GROUPS.SIZE,
        options: [DOCS_CSS_LABEL],
        defaultValue: String(DEFAULT_LOADER_SIZE),
        description: 'Controls the diameter of the loader.',
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
    examples: [
      {
        description: 'Default loader.',
        jsx: <Loader />,
      },
      {
        description: 'Custom loader.',
        jsx: <Loader size="48px" color="blue" />,
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
