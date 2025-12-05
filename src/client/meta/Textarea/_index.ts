import { ComponentMeta } from 'client/definitions'
import { TextareaProps } from 'lib/components'

import { TEXTAREA_EXAMPLES_META } from './examples'
import { TEXTAREA_PROPS_META } from './props'

const TEXTAREA_META: ComponentMeta<TextareaProps> = {
  overview: {
    bundle: 'core',
    title: '...',
    description: ['supports both controlled and uncontrolled modes'],
    composedOf: ['Box'],
    rendersAs: ['textarea'],
  },
  props: TEXTAREA_PROPS_META,
  examples: TEXTAREA_EXAMPLES_META,
}

export default {
  Textarea: TEXTAREA_META,
}
