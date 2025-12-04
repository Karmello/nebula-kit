import { ComponentMeta } from 'client/definitions'
import { HydrationGateProps } from 'lib/components'

const HYDRATION_GATE_PROPS_META: ComponentMeta<HydrationGateProps>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    isResponsive: false,
    description: 'NebkitProvider component to be wrapped.',
  },
  minDelay: {
    options: ['number'],
    isRequired: false,
    isResponsive: false,
    description: 'Minimum delay time the app is treated as hydrating.',
  },
}

export { HYDRATION_GATE_PROPS_META }
