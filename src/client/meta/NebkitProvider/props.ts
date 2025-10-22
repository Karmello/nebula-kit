import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { BRANDS, Theme } from 'lib/definitions'

import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS,
  DEFAULT_NEBKIT_PROVIDER_BRAND,
} from 'lib/components/utility/NebkitProvider/definitions'

const NEBKIT_PROVIDER_PROPS_META: ComponentMeta<NebkitProviderProps<Theme>>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    description: 'Application component to be wrapped by the provider.',
  },
  theme: {
    options: Theme as unknown as string[],
    defaultValue: Theme[0],
    description: 'Theme applied.',
  },
  brand: {
    options: BRANDS as unknown as string[],
    defaultValue: DEFAULT_NEBKIT_PROVIDER_BRAND,
    description: 'Defines the main accent color family for primary, secondary and tertiary intents.',
  },
  background: {
    options: [],
  },
  borderRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS),
    description: 'Global border radius value for components that use border radius.',
  },
}

export { NEBKIT_PROVIDER_PROPS_META }
