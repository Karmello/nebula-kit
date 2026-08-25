import { PasswordInputProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { PASSWORD_CHANGELOG } from './changelog'
import { PASSWORD_INPUT_EXAMPLES } from './examples'
import { PASSWORD_OVERVIEW } from './overview'
import { PASSWORD_PROPS } from './props'

export const PASSWORD_META = {
  overview: PASSWORD_OVERVIEW,
  props: PASSWORD_PROPS,
  examples: PASSWORD_INPUT_EXAMPLES,
  changelog: PASSWORD_CHANGELOG,
} satisfies DocMeta<PasswordInputProps>
