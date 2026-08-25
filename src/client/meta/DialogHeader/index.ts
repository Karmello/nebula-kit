import type { DialogHeaderProps } from 'lib/components/pro/Dialog/slots/DialogHeader/types'
import { ComponentMeta } from 'client/definitions'

import { DIALOG_HEADER_OVERVIEW } from './overview'
import { DIALOG_HEADER_PROPS } from './props'

export const DIALOG_HEADER_META = {
  overview: DIALOG_HEADER_OVERVIEW,
  props: DIALOG_HEADER_PROPS,
} satisfies ComponentMeta<DialogHeaderProps>
