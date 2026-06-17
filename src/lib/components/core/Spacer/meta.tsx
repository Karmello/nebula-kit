import { Spacer, SpacerProps, Text } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { DEFAULT_SPACER_BLOCK_SIZE } from './definitions'

export const SPACER_META = {
  Spacer: {
    overview: {
      bundle: 'core',
      title: 'Layout component that introduces controlled empty space between elements.',
      features: [
        'enables consistent vertical spacing across layouts',
        'supports predefined spacing scale and custom CSS values',
        'supports responsive spacing for adaptive layouts',
      ],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      blockSize: {
        ...BOX_META.Box.props.blockSize,
        defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
        description: 'Controls the spacer vertical size.',
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
    examples: [
      {
        description: `Vertical spacing between two text blocks.`,
        jsx: (
          <>
            <Text>Text 1</Text>
            <Spacer blockSize="48px" />
            <Text>Text 2</Text>
          </>
        ),
      },
    ],
    changelog: {
      '0.9.0': ['added support for predefined size scale values on the `blockSize` prop'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<SpacerProps>,
}
