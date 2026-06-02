import { TSHIRT_SIZES } from 'lib/constants'
import { Spacer, SpacerProps, Text } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

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
      topLevelTags: ['div'],
    },
    props: {
      blockSize: {
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
        isResponsive: true,
        description: 'Controls the spacer block size using predefined length tokens or any CSS value.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        description: `Vertical spacing between two text blocks using the default blockSize (${DEFAULT_SPACER_BLOCK_SIZE}).`,
        jsx: (
          <>
            <Text>Text 1</Text>
            <Spacer />
            <Text>Text 2</Text>
          </>
        ),
      },
      {
        description: 'Vertical spacing between two text blocks using a larger spacing token (4xl).',
        jsx: (
          <>
            <Text>Text 1</Text>
            <Spacer blockSize="4xl" />
            <Text>Text 2</Text>
          </>
        ),
      },
      {
        description: 'Vertical spacing between two text blocks using an explicit CSS blockSize value.',
        jsx: (
          <>
            <Text>Text 1</Text>
            <Spacer blockSize="100px" />
            <Text>Text 2</Text>
          </>
        ),
      },
      {
        description: 'Responsive vertical spacing between two text blocks using spacing tokens.',
        jsx: (
          <>
            <Text>Text 1</Text>
            <Spacer blockSize={{ base: 'sm', md: 'xl' }} />
            <Text>Text 2</Text>
          </>
        ),
      },
    ],
    changelog: {
      '0.9.0': ['added support for predefined size scale values on the `blockSize` prop'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<SpacerProps>,
}
