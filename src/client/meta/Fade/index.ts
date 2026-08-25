import { FadeProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { FADE_CHANGELOG } from './changelog'
import { FADE_EXAMPLES } from './examples'
import { FADE_OVERVIEW } from './overview'
import { FADE_PROPS } from './props'

export const FADE_META = {
  overview: FADE_OVERVIEW,
  props: FADE_PROPS,
  examples: FADE_EXAMPLES,
  changelog: FADE_CHANGELOG,
} satisfies ComponentMeta<FadeProps>
