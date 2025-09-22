import { ComponentMeta } from 'client/definitions'
import { TextTag, TextProps } from 'lib/components/base/Text/definitions'

import { TEXT_PROPS_META } from './props'
import { TEXT_EXAMPLES_META } from './examples'

const TEXT_META: ComponentMeta<TextProps> = {
  overview: {
    description:
      'A foundational component for displaying and styling textual content. It ensures consistent typography across the system.',
    role: [
      'render semantic text elements with consistent typography',
      'provide common text styling and formatting options',
      'allow integration of inline icons alongside text',
      'requires children',
      'renders as a <p> tag',
      'uses neutral text intent',
      'display body copy, captions, and headings',
      'present truncated or clamped snippets of text',
      'combine text with icons for labels or actions',
    ],
    rendersAs: TextTag,
  },
  props: TEXT_PROPS_META,
  examples: TEXT_EXAMPLES_META,
}

export default {
  Text: TEXT_META,
}
