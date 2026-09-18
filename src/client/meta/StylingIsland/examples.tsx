import { NEB_LENGTH } from 'lib/constants'
import { Box, Button, HorizontalRule, StylingIsland, Text } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const STYLING_ISLAND_EXAMPLES: DocExample[] = [
  {
    description: 'Basic usage.',
    isOverviewSnippet: true,
    noSandBox: true,
    jsx: (
      <StylingIsland theme="dark" brand="blue">
        ...
      </StylingIsland>
    ),
  },
  {
    description: 'Text, HorizontalRule and Button composed inside a themed region.',
    sandBoxWithNoPadding: true,
    jsx: (
      <StylingIsland theme="global-flipped" brand="blue">
        <Box drawable bgMode="filled" intent="neutral" padding={NEB_LENGTH.px_024}>
          <Text typography="h5" intent="strong">
            Heading text
          </Text>
          <HorizontalRule marginBottom={NEB_LENGTH.px_016} />
          <Button intent="primary">Button</Button>
        </Box>
      </StylingIsland>
    ),
  },
]
