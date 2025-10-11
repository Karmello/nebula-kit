import { ComponentMeta } from 'client/definitions'
import { NebkitProviderProps } from 'lib/components'
import { Theme } from 'lib/definitions'
import { DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS } from 'lib/components/utility/NebkitProvider/definitions'

const NEBKIT_PROVIDER_PROPS_META: ComponentMeta<NebkitProviderProps<Theme>>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    isResponsive: false,
    description: 'Application component to be wrapped by the provider.',
  },
  theme: {
    options: Theme as unknown as string[],
    defaultValue: Theme[0],
    isRequired: false,
    isResponsive: false,
    description: 'Theme applied.',
  },
  background: {
    options: [],
  },
  borderRadius: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS),
    isRequired: false,
    isResponsive: false,
    description: 'Global border radius value for components that use border radius.',
  },
}

export { NEBKIT_PROVIDER_PROPS_META }
