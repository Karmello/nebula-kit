import { type DocExample } from 'client/definitions'

export const STYLING_ISLAND_EXAMPLES: DocExample[] = [
  {
    description: 'Wrap a subtree to give it its own local theme, regardless of the global theme.',
    code: `<StylingIsland theme="dark">
  <Box drawable bgMode="filled" intent="neutral">
    ...
  </Box>
</StylingIsland>`,
    noSandBox: true,
  },
  {
    description: 'Wrap a subtree to give it its own local brand color.',
    code: `<StylingIsland brand="blue">
  ...
</StylingIsland>`,
    noSandBox: true,
  },
]
