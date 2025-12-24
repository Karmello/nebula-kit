import { ComponentMeta } from 'client/definitions'
import { HydrationGateProps } from 'lib/components'

const HYDRATION_GATE_PROPS_META: ComponentMeta<HydrationGateProps>['props'] = {
  children: {
    options: ['ReactElement'],
    isRequired: true,
    isResponsive: false,
    description: 'Application tree to be wrapped - typically NebkitProvider.',
  },
  minDelay: {
    options: ['number'],
    isRequired: false,
    isResponsive: false,
    description: 'Minimum time in milliseconds the app remains hidden after hydration begins.',
  },
}

export { HYDRATION_GATE_PROPS_META }
