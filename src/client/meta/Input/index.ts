import { InputProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { INPUT_CHANGELOG } from './changelog'
import { INPUT_EXAMPLES } from './examples'
import { INPUT_OVERVIEW } from './overview'
import { INPUT_PROPS } from './props'

export const INPUT_META = {
  overview: INPUT_OVERVIEW,
  props: INPUT_PROPS,
  examples: INPUT_EXAMPLES,
  changelog: INPUT_CHANGELOG,
} satisfies ComponentMeta<InputProps>
