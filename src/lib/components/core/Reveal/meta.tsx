import { ComponentMeta } from 'client/definitions'

import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SIZE, REVEAL_TAGS, type RevealProps } from './definitions'
import { Reveal } from './reveal'
import { Box } from '../Box'
import BOX_META from '../Box/meta'
import RESIZE_META from '../Resize/meta'
import BUTTON_META from '../Button/meta'

export default {
  Reveal: {
    overview: {
      bundle: 'core',
      title: 'Disclosure component for toggling expandable content.',
      features: [
        'provides a labeled control for toggling content visibility',
        'animates expand and collapse using measured height for smooth transitions',
      ],
      topLevelTags: REVEAL_TAGS,
      composedOf: ['Box', 'Flex', 'Button', 'Resize'],
    },
    props: {
      children: {
        ...RESIZE_META.Resize.props.children,
        isRequired: true,
      },
      color: BUTTON_META.Button.props.color,
      disabled: BUTTON_META.Button.props.disabled,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_REVEAL_INTENT),
      },
      label: {
        options: ['string'],
        isRequired: true,
        description: 'Text displayed on the reveal button.',
      },
      size: {
        ...BUTTON_META.Button.props.size,
        defaultValue: DEFAULT_REVEAL_SIZE,
        description: 'Size of the reveal button.',
      },
      tag: BOX_META.Box.props.tag,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        description: 'Default reveal with a label and content provided.',
        jsx: (
          <Reveal label="Label">
            <Box blockSize="80px" padding="20px">
              Content
            </Box>
          </Reveal>
        ),
      },
      {
        description: 'Disabled state of the Reveal.',
        jsx: (
          <Reveal label="Label" disabled>
            <Box blockSize="80px" padding="20px">
              Content
            </Box>
          </Reveal>
        ),
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } as ComponentMeta<RevealProps>,
}
