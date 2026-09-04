import { type DocExample } from 'client/definitions'

export const NEBKIT_PROVIDER_EXAMPLES: DocExample[] = [
  {
    description: 'Use it as a wrapper around your entire app.',
    code: `<NebkitProvider>
  <App />
</NebkitProvider>`,
    noSandBox: true,
  },
  {
    description: 'Changing global configuration.',
    code: `<NebkitProvider theme="dark" brand="blue" borderRadiusSize="xs">
  <App />
</NebkitProvider>`,
    noSandBox: true,
  },
]
