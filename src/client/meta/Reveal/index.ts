import { RevealProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { REVEAL_CHANGELOG } from './changelog'
import { REVEAL_EXAMPLES } from './examples'
import { REVEAL_OVERVIEW } from './overview'
import { REVEAL_PROPS } from './props'

export const REVEAL_META = {
  overview: REVEAL_OVERVIEW,
  props: REVEAL_PROPS,
  examples: REVEAL_EXAMPLES,
  changelog: REVEAL_CHANGELOG,
} satisfies ComponentMeta<RevealProps>
