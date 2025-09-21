import { ComponentMeta } from 'client/definitions'
import { HydrationGateProps } from 'lib/components'

export default {
  children: {
    name: 'children',
    options: ['ReactElement'],
    isRequired: true,
    isResponsive: false,
    description: 'The React element tree wrapped by HydrationGate.',
  },
  minDelay: {
    name: 'minDelay',
    options: ['number'],
    isRequired: false,
    isResponsive: false,
    description:
      'An optional number in milliseconds that postpones revealing the children after hydration. Useful for ensuring a loader is visible long enough to avoid a quick flash.',
  },
  fallback: {
    name: 'fallback',
    options: ['ReactNode'],
    isRequired: false,
    isResponsive: false,
    description:
      'An optional React node displayed while the children are hidden. Typically used to show a loader or placeholder during hydration.',
  },
} as ComponentMeta<HydrationGateProps>['ownProps']
