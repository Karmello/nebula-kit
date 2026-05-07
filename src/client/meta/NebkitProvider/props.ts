import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { SATURATIONS, THEMES } from 'lib/definitions'

import {
  NEBKIT_BORDER_RADIUS_SIZES,
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_THEME,
  DEFAULT_NEBKIT_RIPPLE_MODE,
  NEBKIT_RIPPLE_MODES,
  DEFAULT_NEBKIT_SATURATION,
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
    options: ['BoxColor'],
    defaultValue: DEFAULT_NEBKIT_BRAND,
    description: 'Global brand color used as the primary accent across components.',
  },
  lockGlobalScroll: {
    options: ['boolean'],
    description: 'Locks global document scrolling while preserving layout by compensating for scrollbar width.',
  },
  rippleMode: {
    options: NEBKIT_RIPPLE_MODES,
    defaultValue: DEFAULT_NEBKIT_RIPPLE_MODE,
    description: 'Controls how visible the ripple interaction effect is across components.',
  },
  saturation: {
    options: SATURATIONS,
    defaultValue: DEFAULT_NEBKIT_SATURATION,
    description: 'Global color saturation profile used across NebulaKit components.',
  },
  theme: {
    options: THEMES,
    defaultValue: DEFAULT_NEBKIT_THEME,
    description: 'Global theme.',
  },
}

export { NEBKIT_PROVIDER_PROPS_META }
