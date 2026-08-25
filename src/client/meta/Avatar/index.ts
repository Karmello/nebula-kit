import { AvatarProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { AVATAR_CHANGELOG } from './changelog'
import { AVATAR_EXAMPLES } from './examples'
import { AVATAR_OVERVIEW } from './overview'
import { AVATAR_PROPS } from './props'

export const AVATAR_META = {
  overview: AVATAR_OVERVIEW,
  props: AVATAR_PROPS,
  examples: AVATAR_EXAMPLES,
  changelog: AVATAR_CHANGELOG,
} satisfies ComponentMeta<AvatarProps>
