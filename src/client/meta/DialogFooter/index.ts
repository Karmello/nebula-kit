import type { DialogFooterProps } from 'lib/components/pro/Dialog/slots/DialogFooter/types'
import { DocMeta } from 'client/definitions'

import { DIALOG_FOOTER_OVERVIEW } from './overview'
import { DIALOG_FOOTER_PROPS } from './props'

export const DIALOG_FOOTER_META = {
  overview: DIALOG_FOOTER_OVERVIEW,
  props: DIALOG_FOOTER_PROPS,
} satisfies DocMeta<DialogFooterProps>
