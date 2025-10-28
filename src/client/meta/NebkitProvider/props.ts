import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { BRANDS, Theme, THEME } from 'lib/definitions'

import {
  NEBKIT_BORDER_RADIUS_SIZES,
  NEBKIT_BORDER_WIDTH_SIZES,
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BORDER_WIDTH_SIZE,
  DEFAULT_NEBKIT_BRAND,
} from 'lib/components/utility/NebkitProvider/definitions'

const NEBKIT_PROVIDER_PROPS_META: ComponentMeta<NebkitProviderProps<Theme>>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    description: 'Application component to be wrapped by the provider.',
  },
  theme: {
    options: THEME as unknown as string[],
    defaultValue: THEME[0],
    description: 'Theme applied.',
  },
  brand: {
    options: BRANDS as unknown as string[],
    defaultValue: DEFAULT_NEBKIT_BRAND,
    description: 'Defines the main accent color family for primary, secondary and tertiary intents.',
  },
  background: {
    options: [],
  },
  borderWidthSize: {
    options: NEBKIT_BORDER_WIDTH_SIZES,
    defaultValue: String(DEFAULT_NEBKIT_BORDER_WIDTH_SIZE),
    description: 'Global border width value.',
  },
  borderRadiusSize: {
    options: NEBKIT_BORDER_RADIUS_SIZES,
    defaultValue: String(DEFAULT_NEBKIT_BORDER_RADIUS_SIZE),
    description: 'Global border radius value.',
  },
}

export { NEBKIT_PROVIDER_PROPS_META }
