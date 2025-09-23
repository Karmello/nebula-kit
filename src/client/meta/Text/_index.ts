import { ComponentMeta } from 'client/definitions'
import { TextTag, TextProps } from 'lib/components/base/Text/definitions'

import { TEXT_PROPS_META } from './props'
import { TEXT_EXAMPLES_META } from './examples'

const TEXT_META: ComponentMeta<TextProps> = {
  overview: {
    title:
      'Foundational component for displaying and styling textual content that ensures consistent typography across the system.',
    description: [
      'renders semantic text elements with consistent typography',
      'provides common text styling and formatting options',
      'allows integration of inline icons alongside text',
    ],
    rendersAs: TextTag,
  },
  props: TEXT_PROPS_META,
  examples: TEXT_EXAMPLES_META,
}

export default {
  Text: TEXT_META,
}
