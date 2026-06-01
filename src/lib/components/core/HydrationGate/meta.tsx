import { ComponentMeta } from 'client/definitions'
import { App } from 'client/components'

import { type HydrationGateProps } from './definitions'
import { HydrationGate } from './hydration-gate'
import { NebkitProvider } from '../NebkitProvider'

export default {
  HydrationGate: {
    overview: {
      bundle: 'core',
      title: 'SSR boundary that prevents flashes of unstyled or mismatched content during hydration.',
      features: [
        'provides an escape hatch for SSR setups where first-paint flicker is unacceptable',
        'renders children immediately so effects can run but keeps them visually hidden until hydration completes',
        'delays application visibility until the client is fully hydrated',
        'useful when theme, brand or responsive state must be resolved before first paint',
      ],
    },
    props: {
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
    },
    examples: [
      {
        description: 'Must wrap NebkitProvider in SSR environments.',
        jsx: (
          <HydrationGate>
            <NebkitProvider>
              <App />
            </NebkitProvider>
          </HydrationGate>
        ),
        noSandBox: true,
      },
    ],
    hideExamplesThemeToggle: true,
    changelog: {
      '0.2.3': ['released'],
    },
  } as ComponentMeta<HydrationGateProps>,
}
