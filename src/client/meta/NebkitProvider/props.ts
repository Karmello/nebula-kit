import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { DEFAULT_BORDER_RADIUS, Theme } from 'lib/definitions'

const NEBKIT_PROVIDER_PROPS_META: ComponentMeta<NebkitProviderProps>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    isResponsive: false,
    description: 'Application component to be wrapped by the provider.',
  },
  defaultTheme: {
    options: Theme as unknown as string[],
    defaultValue: Theme[0],
    isRequired: false,
    isResponsive: false,
    description: 'Default theme for the app.',
  },
  defaultBorderRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_BORDER_RADIUS),
    isRequired: false,
    isResponsive: false,
    description: 'Global border radius value for components that use border radius.',
  },
}

export { NEBKIT_PROVIDER_PROPS_META }
