import type { NebkitProviderProps } from 'lib/components/core/NebkitProvider/types'
import { ComponentMeta } from 'client/definitions'

import { NEBKIT_PROVIDER_CHANGELOG } from './changelog'
import { NEBKIT_PROVIDER_EXAMPLES } from './examples'
import { NEBKIT_PROVIDER_OVERVIEW } from './overview'
import { NEBKIT_PROVIDER_PROPS } from './props'

export const NEBKIT_PROVIDER_META = {
  overview: NEBKIT_PROVIDER_OVERVIEW,
  props: NEBKIT_PROVIDER_PROPS,
  examples: NEBKIT_PROVIDER_EXAMPLES,
  hideExamplesThemeToggle: true,
  changelog: NEBKIT_PROVIDER_CHANGELOG,
} satisfies ComponentMeta<NebkitProviderProps>
