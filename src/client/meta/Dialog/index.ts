import type { DialogProps } from 'lib/components/pro/Dialog/types'
import { DocMeta } from 'client/definitions'

import { DIALOG_CHANGELOG } from './changelog'
import { DIALOG_EXAMPLES } from './examples'
import { DIALOG_OVERVIEW } from './overview'
import { DIALOG_PROPS } from './props'

export const DIALOG_META = {
  overview: DIALOG_OVERVIEW,
  props: DIALOG_PROPS,
  examples: DIALOG_EXAMPLES,
  changelog: DIALOG_CHANGELOG,
} satisfies DocMeta<DialogProps>
