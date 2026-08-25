import { LoaderProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { LOADER_CHANGELOG } from './changelog'
import { LOADER_EXAMPLES } from './examples'
import { LOADER_OVERVIEW } from './overview'
import { LOADER_PROPS } from './props'

export const LOADER_META = {
  overview: LOADER_OVERVIEW,
  props: LOADER_PROPS,
  examples: LOADER_EXAMPLES,
  changelog: LOADER_CHANGELOG,
} satisfies ComponentMeta<LoaderProps>
