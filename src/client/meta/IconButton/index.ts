import { IconButtonProps } from 'lib/index.core'
import { DocMeta } from 'client/definitions'

import { ICON_BUTTON_CHANGELOG } from './changelog'
import { ICON_BUTTON_EXAMPLES } from './examples'
import { ICON_BUTTON_OVERVIEW } from './overview'
import { ICON_BUTTON_PROPS } from './props'

export const ICON_BUTTON_META = {
  overview: ICON_BUTTON_OVERVIEW,
  props: ICON_BUTTON_PROPS,
  examples: ICON_BUTTON_EXAMPLES,
  changelog: ICON_BUTTON_CHANGELOG,
} satisfies DocMeta<IconButtonProps>
