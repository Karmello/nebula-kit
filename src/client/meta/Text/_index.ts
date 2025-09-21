import { ComponentMeta } from 'client/definitions'
import { TEXT_INHERITED_PROPS, TextTag, TextOwnProps } from 'lib/components/base/Text/definitions'

import props from './props'
import examples from './examples'

const TEXT_META: ComponentMeta<TextOwnProps> = {
  overview: {
    description:
      'A foundational component for displaying and styling textual content. It ensures consistent typography across the system.',
    role: [
      'render semantic text elements with consistent typography',
      'provide common text styling and formatting options',
      'allow integration of inline icons alongside text',
    ],
    behavior: ['requires children'],
    byDefault: ['renders as a <p> tag', 'uses neutral text intent'],
    examplesOfUse: [
      'display body copy, captions, and headings',
      'present truncated or clamped snippets of text',
      'combine text with icons for labels or actions',
    ],
    composedOf: TEXT_INHERITED_PROPS,
    rendersAs: TextTag,
  },
  props,
  examples,
}

export default {
  Text: TEXT_META,
}
