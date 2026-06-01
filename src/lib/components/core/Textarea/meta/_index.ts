import { ComponentMeta } from 'client/definitions'

import { type TextareaProps } from '../definitions'
import { TEXTAREA_EXAMPLES_META } from './examples'
import { TEXTAREA_PROPS_META } from './props'

const TEXTAREA_META: ComponentMeta<TextareaProps> = {
  overview: {
    bundle: 'core',
    title: 'Multiline text input for entering and editing longer text.',
    features: ['supports both controlled and uncontrolled modes'],
    composedOf: ['Box'],
    topLevelTags: ['textarea'],
  },
  props: TEXTAREA_PROPS_META,
  examples: TEXTAREA_EXAMPLES_META,
  changelog: {
    '0.9.0': ['added `maxLength` prop'],
    '0.2.3': ['released'],
  },
}

export default {
  Textarea: TEXTAREA_META,
}
