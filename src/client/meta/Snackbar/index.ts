import { UseSnackbarShowArgs } from 'lib/components/pro/Snackbar/types'
import { SnackbarProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { SNACKBAR_CHANGELOG } from './changelog'
import { SNACKBAR_EXAMPLES, USE_SNACKBAR_EXAMPLES } from './examples'
import { SNACKBAR_OVERVIEW, USE_SNACKBAR_OVERVIEW } from './overview'
import { SNACKBAR_PROPS, USE_SNACKBAR_PROPS } from './props'

export const SNACKBAR_META = {
  overview: SNACKBAR_OVERVIEW,
  props: SNACKBAR_PROPS,
  examples: SNACKBAR_EXAMPLES,
  changelog: SNACKBAR_CHANGELOG,
} satisfies DocMeta<SnackbarProps>

export const USE_SNACKBAR_META = {
  overview: USE_SNACKBAR_OVERVIEW,
  examples: USE_SNACKBAR_EXAMPLES,
  props: USE_SNACKBAR_PROPS,
} satisfies DocMeta<UseSnackbarShowArgs>
