import { SlideProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { SLIDE_CHANGELOG } from './changelog'
import { SLIDE_EXAMPLES } from './examples'
import { SLIDE_OVERVIEW } from './overview'
import { SLIDE_PROPS } from './props'

export const SLIDE_META = {
  overview: SLIDE_OVERVIEW,
  props: SLIDE_PROPS,
  examples: SLIDE_EXAMPLES,
  changelog: SLIDE_CHANGELOG,
} satisfies ComponentMeta<SlideProps>
