import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { COLORS, THEMES } from 'lib/definitions'

import {
  NEBKIT_BORDER_RADIUS_SIZES,
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_THEME,
} from 'lib/components/core/utility/NebkitProvider'

const NEBKIT_PROVIDER_PROPS_META: ComponentMeta<NebkitProviderProps>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    description: 'Application component to be wrapped by the provider.',
  },
  borderRadiusSize: {
    options: NEBKIT_BORDER_RADIUS_SIZES,
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    description: 'Global border radius size applied across all components.',
  },
  brand: {
    options: COLORS as unknown as string[],
    defaultValue: DEFAULT_NEBKIT_BRAND,
    description: 'Global brand color used as the primary accent across components.',
  },
  theme: {
    options: THEMES as unknown as string[],
    defaultValue: DEFAULT_NEBKIT_THEME,
    description: 'Global theme.',
  },
}

export { NEBKIT_PROVIDER_PROPS_META }
