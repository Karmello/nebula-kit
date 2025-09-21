import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { DEFAULT_BORDER_RADIUS, Theme } from 'lib/definitions'

export default {
  children: {
    name: 'children',
    options: ['ReactElement'],
    isRequired: true,
    isResponsive: false,
    description: 'The application or subtree wrapped by the provider.',
  },
  defaultTheme: {
    name: 'defaultTheme',
    options: Theme as unknown as string[],
    defaultValue: Theme[0],
    isRequired: false,
    isResponsive: false,
    description: 'Starting theme for the app.',
  },
  defaultBorderRadius: {
    name: 'defaultBorderRadius',
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_BORDER_RADIUS),
    isRequired: false,
    isResponsive: false,
    description: 'Starting border radius scale or custom value.',
  },
} as ComponentMeta<NebkitProviderProps>['props']
