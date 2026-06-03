import { HydrationGateProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

export const HYDRATION_GATE_META = {
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
        code: `<HydrationGate>
  <NebkitProvider>
    <App />
  </NebkitProvider>
</HydrationGate>`,
        noSandBox: true,
      },
    ],
    hideExamplesThemeToggle: true,
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<HydrationGateProps>,
}
