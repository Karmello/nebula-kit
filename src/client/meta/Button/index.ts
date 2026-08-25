import { ButtonProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BUTTON_CHANGELOG } from './changelog'
import { BUTTON_EXAMPLES } from './examples'
import { BUTTON_OVERVIEW } from './overview'
import { BUTTON_PROPS } from './props'

export const BUTTON_META = {
  overview: BUTTON_OVERVIEW,
  props: BUTTON_PROPS,
  examples: BUTTON_EXAMPLES,
  changelog: BUTTON_CHANGELOG,
} satisfies ComponentMeta<ButtonProps>
