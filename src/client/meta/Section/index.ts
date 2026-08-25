import { SectionProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { SECTION_CHANGELOG } from './changelog'
import { SECTION_EXAMPLES } from './examples'
import { SECTION_OVERVIEW } from './overview'
import { SECTION_PROPS } from './props'

export const SECTION_META = {
  overview: SECTION_OVERVIEW,
  props: SECTION_PROPS,
  examples: SECTION_EXAMPLES,
  changelog: SECTION_CHANGELOG,
} satisfies DocMeta<SectionProps>
