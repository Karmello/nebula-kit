import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { COLORS, THEMES, Theme } from 'lib/definitions'

import {
  NEBKIT_BORDER_RADIUS_SIZES,
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
} from 'lib/components/core/utility/NebkitProvider/definitions'

const NEBKIT_PROVIDER_PROPS_META: ComponentMeta<NebkitProviderProps<Theme>>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    description: 'Application component to be wrapped by the provider.',
  },
  borderRadiusSize: {
    options: NEBKIT_BORDER_RADIUS_SIZES,
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    description: 'Global border radius value.',
  },
  brand: {
    options: COLORS as unknown as string[],
    defaultValue: DEFAULT_NEBKIT_BRAND,
    description: 'Defines the main accent color family for the components.',
  },
  theme: {
    options: THEMES as unknown as string[],
    defaultValue: THEMES[0],
    description: 'Theme applied.',
  },
}

export { NEBKIT_PROVIDER_PROPS_META }
